import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { getTvShowsListFromApi } from '../redux/actions/tvShows'
import { getPagesData, getTvShowsServiceStatus } from '../redux/selectors'

export default function PageHandler() {

    const fnDispatch = useDispatch();

    let bIsServiceLoading = useSelector(getTvShowsServiceStatus);
    let oPagesData = useSelector(getPagesData);

    const handlePageChange = function(oEvent, iValue) {
        fnDispatch(getTvShowsListFromApi(iValue));
    }

    return(<>
            {!bIsServiceLoading && <Pagination 
            count={oPagesData.totalPages}
            page={oPagesData.currentPage}
            onChange={handlePageChange}
            showFirstButton showLastButton
            defaultPage={6} boundaryCount={2} />}
        </>
    )
}