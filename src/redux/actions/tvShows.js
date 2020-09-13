import { START_TVSHOWS_REQUEST_FROM_API, END_TVSHOWS_REQUEST_FROM_API, ADD_TVSHOWS_TO_MY_LIST, CHANGE_TAB } from '../actionTypes';
import axios from "axios";

const apiKey = "f4e74e12ee08e158ed0b21a1089c9e43";

const startTvShowsRequest = (page) => ({
    type: START_TVSHOWS_REQUEST_FROM_API,
    page: page
});

const endTvShowsRequest = receivedResponse => ({
    type: END_TVSHOWS_REQUEST_FROM_API,
    tvShowsList: receivedResponse && receivedResponse.results ? receivedResponse.results : [],
    totalPages: receivedResponse && receivedResponse.total_pages ? receivedResponse.total_pages : 1
});

export function getTvShowsListFromApi(page) {
    return dispatch => {
        dispatch(startTvShowsRequest(page));
        return axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=" + apiKey + "&page=" + page)
            .then(response => dispatch(endTvShowsRequest(response.data)))
            .catch(error => console.log(error));
    };
}

export const addTvShowToMyList = tvShow => ({
    type: ADD_TVSHOWS_TO_MY_LIST,
    tvShow: tvShow
});

export const changeTab = toTab => ({
    type: CHANGE_TAB,
    tab: toTab
})