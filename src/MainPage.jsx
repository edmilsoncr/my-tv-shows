import React from 'react';
import TvShowList from "./components/TvShowList";
import SelectedTvShowsList from "./components/SelectedTvShowsList";
import PageHandler from "./components/PageHandler";
import { getCurrentTab } from './redux/selectors'
import { useSelector } from 'react-redux';

function MainPage() {
    const SELECTED_TVSHOWS_LIST_TAB = "SELECTED_TVSHOWS_LIST_TAB";

    let sCurrentTab = useSelector(getCurrentTab);

    return (
        <div ml={20}>
            {sCurrentTab === SELECTED_TVSHOWS_LIST_TAB ? <SelectedTvShowsList/> : <><TvShowList/>
            <PageHandler/>
            </>}
        </div>
    )
}

export default MainPage;