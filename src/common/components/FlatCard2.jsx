import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import UserContext from '../../context/user';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    heigth: 250,
    borderRadius: '40px',
    boxShadow: '2px 4px 4px #FADDB6',
    marginTop: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#8CB0BC',
  },
}));

export default function FlatCard2(props) {
  const classes = useStyles();

  const handleClick = async () => {
    const accessToken = localStorage.getItem('userToken');
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const userProfile = await axios.post(
        `https://toctoc-api.herokuapp.com/users/favorite/${props._id}`,
        {},
        config
      );
    }
  };

  const { connectedUser } = useContext(UserContext);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={props.avatar}
            aria-label="recipe"
            className={classes.avatar}
          >
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            {connectedUser?.favorites?.includes(props._id) && <FavoriteIcon />}
            {!connectedUser?.favorites?.includes(props._id) && (
              <FavoriteBorderIcon  />
            )}
          </IconButton>
        }
        title={props.title}
        subheader={props.city}
        // subheader={district}
      />

      <CardMedia
        to={`/unic/${props._id}`}
        component={Link}
        className={classes.media}
        image={props.images?.length > 0 ? props.images[0] : ''}
        title={props.title}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
