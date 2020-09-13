import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function DetailsPage(props) {
    return (
        <div>
            <h1>Details</h1>
            {props.location.tvProps ? 
            <div>
                <h5>Title: {props.location.tvProps.tvShow.name}</h5>
                <h5>Colocar informações mais detalhadas acerca deste TV Show aqui (Fase 2)</h5>
            </div> :
            <h5>No TV Show selected</h5>}
            {<Button variant="contained" color="primary" component={Link} to={'/'} >Go to MainPage</Button>}
        </div>
    )
}

export default DetailsPage;