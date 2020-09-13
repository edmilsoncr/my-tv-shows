export const getTvShowsListToDisplay = (store) => store && store.tvShows && store.tvShows.tvshowsList ? store.tvShows.tvshowsList: [];

export const getTvShowsServiceStatus = (store) => store && store.tvShows && store.tvShows.isLoading ? store.tvShows.isLoading : false;

export const getPagesData = (store) => store && store.tvShows && store.tvShows.pageData ? store.tvShows.pageData : {
    currentPage: 1,
    totalPages: 1
};

export const getSelectedTvShowsListToDisplay = (store) => store && store.tvShows && store.tvShows.myTvshows ? store.tvShows.myTvshows : [];

const TVSHOWS_LIST_TAB = "TVSHOWS_LIST_TAB";
export const getCurrentTab = (store) => store && store.tvShows && store.tvShows.currentTab ? store.tvShows.currentTab : TVSHOWS_LIST_TAB;