import React, { useContext, useEffect, useState } from "react";
import CarousselCard from "./CarousselCard";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import UserContext from "../../context/user";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    fontFamily: "'Comfortaa', cursive",
    textAlign: "justify",
  },
  icon: {
    fontSize: "35px",
    color: "#8CB0BC",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  proname: {
    marginTop: "20px",
  },
}));

function UnicFlatCard(props) {
  const classes = useStyles();

  // const [unicflat, setUnicFlat] = useState([]);
  // const { connectedUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(connectedUser);
  //   if (Object.keys(connectedUser).length > 0) {
  //     Promise.all(
  //       connectedUser.unicflat.map((item) => {
  //         const req = axios.get(
  //           `https://toctoc-api.herokuapp.com/flat/${item}`
  //         );
  //         return req;
  //       })
  //     ).then((response) => setUnicFlat(response));
  //   }
  // }, []);
  // console.log(unicflat);

  return (
    <div className={classes.flex}>
      <CarousselCard />
      <div className={classes.content}>
        <h1>
          <ListItemIcon>
            <HomeIcon className={classes.icon} />
          </ListItemIcon>
          Loft avec terrasse
        </h1>
        <div className={classes.root}>
          <Avatar alt="Proprietaire" src="/assets/img/men.jpeg" />
          <p className={classes.proname}>Michou Dupond</p>
        </div>
        <h2>Quartier Saint Michel</h2>
        <p>
          Ce magnifique loft refait à neuf en 2019, au design moderne et épurée,
          <br />
          est situé dans un quartier animé avec toutes les commodités
          <br />à disposition. Spacieux, lumineux et fonctionnel, au charme
          certain, <br />
          vous vous y sentirez chez vous dés que vous passerez <br /> les portes
          de cet appartement.
        </p>
        <ul>
          <li>Appartement</li>
          <li>Non Meublé</li>
          <li>92m2</li>
          <li>1200 €</li>
        </ul>
      </div>
    </div>
  );
}

export default UnicFlatCard;
