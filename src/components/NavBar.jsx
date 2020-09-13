import React from 'react';
import { Box, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from 'react-redux';
import { changeTab } from '../redux/actions/tvShows'

export default function NavBar() {
  const TVSHOWS_LIST_TAB = "TVSHOWS_LIST_TAB";
  const SELECTED_TVSHOWS_LIST_TAB = "SELECTED_TVSHOWS_LIST_TAB";
  
  const tbDispatch = useDispatch();
  const changeToTab = function (tab, e) {
    tbDispatch(changeTab(tab));
  }

  return (
    <Box display="flex" bgcolor="grey.200" p={3} alignItems="center">
      <Typography variant="h5">My TV Shows</Typography>
      <Box ml={4}>
        <Button color="primary" onClick={(e) => changeToTab(TVSHOWS_LIST_TAB, e)}>Search</Button>
        <Button color="primary" onClick={(e) => changeToTab(SELECTED_TVSHOWS_LIST_TAB, e)}>Selected</Button>
      </Box>

      <Box flexGrow={1} textAlign="right">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}