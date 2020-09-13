import React, {useEffect} from 'react';
import TvShowItem from './TvShowItem.jsx'
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getTvShowsListFromApi } from '../redux/actions/tvShows'
import { getTvShowsListToDisplay, getTvShowsServiceStatus } from '../redux/selectors'

export default function TvShowList() {

    const fnDispatch = useDispatch();
    useEffect(() => {
        fnDispatch(getTvShowsListFromApi(1));
    }, [fnDispatch]);

    let bIsServiceLoading = useSelector(getTvShowsServiceStatus);
    let aTvShowsToDisplay = useSelector(getTvShowsListToDisplay);
    
    return(<>
        {bIsServiceLoading ?
          <p>Loading TV Shows</p> :
          aTvShowsToDisplay.length > 0 ?
            <Grid container spacing={3}>
              {aTvShowsToDisplay.map(tvShow => <Grid key={tvShow.id} item md={4} lg={3}><TvShowItem tvShow={tvShow}/></Grid>)}
            </Grid> :
            <p>There are no available TV Shows</p>}
      </>
    )
}