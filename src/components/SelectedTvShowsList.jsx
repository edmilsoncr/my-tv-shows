import React from 'react';
import TvShowItem from './TvShowItem.jsx'
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { getSelectedTvShowsListToDisplay } from '../redux/selectors'

export default function SelectedTvShowsList() {

    let aTvShowsToDisplay = useSelector(getSelectedTvShowsListToDisplay);

    return(<>
        {aTvShowsToDisplay.length > 0 ?
            <Grid container spacing={3}>
              {aTvShowsToDisplay.map(tvShow => <Grid key={tvShow.id} item md={4} lg={3}><TvShowItem tvShow={tvShow}/></Grid>)}
            </Grid> :
            <p>There are no TV Shows in your favorites list</p>}
      </>
    )
}