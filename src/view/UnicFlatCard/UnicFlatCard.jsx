import React, { useContext, useEffect, useState } from 'react';
import CarousselCard from './CarousselCard';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import UserContext from '../../context/user';
import { Button } from '@material-ui/core';
import { AddLocation } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    fontFamily: "'Comfortaa', cursive",
    textAlign: 'justify',
  },
  icon: {
    fontSize: '35px',
    color: '#8CB0BC',
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  proname: {
    marginTop: '20px',
  },
}));

function UnicFlatCard(props) {
  const { connectedUser, setConnectedUser } = useContext(UserContext);

  const classes = useStyles();

  const [unicflat, setUnicFlat] = useState([]);

  useEffect(() => {
    axios
      .get(`https://toctoc-api.herokuapp.com/flat/${props.match.params.id}`)
      .then((response) => {
        setUnicFlat(response.data);
        console.log(response.data);
      });
  }, [props.match.params.id]);
  console.log(unicflat);

  const displayType = unicflat.type;
  const displayFurnished = unicflat.furnished;

  return (
    <div className={classes.flex}>
      <CarousselCard images={unicflat.images} />
      <div className={classes.content}>
        <h1>
          <ListItemIcon>
            <HomeIcon className={classes.icon} />
          </ListItemIcon>
          {unicflat.title}
        </h1>
        <div className={classes.root}>
          {/* images proprio */}
          <Avatar alt="Proprietaire" src="/assets/img/men.jpeg" />
          <p className={classes.proname}>Joe</p>
        </div>
        <h2>{unicflat.district}</h2>
        <p>{unicflat.description}</p>
        <ul>
          {displayType === 'flat' && <li>Appartement</li>}
          {displayType === 'house' && <li>Maison</li>}
          {displayFurnished === 'furnished' && <li>Meublé</li>}
          {displayFurnished === 'unfurnished' && <li>Non meublé</li>}

          <li>{unicflat.area} m2</li>
          <li>{unicflat.price} €</li>
        </ul>

        {Object.keys(connectedUser).length > 0 && (
          <Button className={classes.nous} to={'flat/' + unicflat._id} component={Link}>
            <ListItemIcon>
              <AddLocation />
            </ListItemIcon>
            edit
          </Button>
        )}
      </div>
    </div>
  );
}

export default UnicFlatCard;
