import { START_TVSHOWS_REQUEST_FROM_API, END_TVSHOWS_REQUEST_FROM_API, ADD_TVSHOWS_TO_MY_LIST, CHANGE_TAB } from '../actionTypes';
const TVSHOWS_LIST_TAB = "TVSHOWS_LIST_TAB";

const initialState = {
    isLoading: true,
    tvshowsList: [],
    myTvshows: [],
    nameString: "",
    currentTab: TVSHOWS_LIST_TAB,
    pageData: {
        currentPage: 1,
        totalPages: 1
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case START_TVSHOWS_REQUEST_FROM_API:
            return {
                ...state,
                isLoading: true,
                tvshowsList: [],
                nameString: "",
                pageData: {
                    ...state.pageData,
                    currentPage: action.page
                }
            }
        case END_TVSHOWS_REQUEST_FROM_API:
            return {
                ...state,
                isLoading: false,
                tvshowsList: action.tvShowsList,
                pageData: {
                    ...state.pageData,
                    totalPages: action.totalPages
                }
            }
        case ADD_TVSHOWS_TO_MY_LIST:
            return {
                ...state,
                myTvshows: state.myTvshows.concat(action.tvShow)
            }
        case CHANGE_TAB:
            return {
                ...state,
                currentTab: action.tab
            }
        default:
            return state;
    }
}