import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

function NotFoundPage() {
    return (
        <div className="not-found">
            <SentimentVeryDissatisfiedIcon className="not-found" color="disabled" style={{ fontSize: 400 }}></SentimentVeryDissatisfiedIcon>
            <h1 className="not-found">PAGE NOT FOUND</h1>
            <Button className="not-found" variant="contained" color="primary" component={Link} to={'/'} >Go to HomePage</Button>
        </div>
    )
}

export default NotFoundPage;