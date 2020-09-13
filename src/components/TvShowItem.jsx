import React from 'react';
import { useDispatch } from 'react-redux';
import { addTvShowToMyList } from '../redux/actions/tvShows'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const OverviewWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const VotesWrapper = styled.div`
  margin-left: 1em;
  margin-top: 0.5em;
`;

export default function TvShowItem(props) {
  const classes = useStyles();
  const posterUrl = "https://image.tmdb.org/t/p/w500" + props.tvShow.poster_path;
  const tnDispatch = useDispatch();

  const addTvShowToFavorites = function (oEvent) {
    tnDispatch(addTvShowToMyList(props.tvShow));
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.tvShow.name}
        subheader={"First air date: " + props.tvShow.first_air_date}
      />
        <CardMedia
          className={classes.media}
          image={posterUrl}
          title={props.tvShow.name}
          component={Link} to={{pathname: "/details", tvProps: {tvShow: props.tvShow}}}
        />
      <VotesWrapper>
        <Rating name="half-rating-read" defaultValue={props.tvShow.vote_average / 2} precision={0.1} readOnly />
      </VotesWrapper>
      <OverviewWrapper>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{props.tvShow.overview}</Typography>
        </CardContent>
      </OverviewWrapper>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to My List" onClick={addTvShowToFavorites}>
          <FavoriteIcon/>
        </IconButton>
        {/* <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
