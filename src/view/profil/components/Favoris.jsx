import React from "react";
import { makeStyles } from "@material-ui/core";
import FlatCard2 from "../../../common/components/FlatCard2";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "Lato, sans-serif, Black italic",
    backgroundColor: "white",
    padding: 50,
    marginBottom: "50px",
  },
  flat: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    width: "50px",
    color: "#4E96AF",
  },
}));

function Favoris(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        <h1>
          <FavoriteIcon className={classes.icon} />
          Mes Favoris
        </h1>
      </div>
      <div className={classes.flat}>
        <FlatCard2 />
        <FlatCard2 />
        <FlatCard2 />
        <FlatCard2 />
      </div>
    </div>
  );
}

export default Favoris;
