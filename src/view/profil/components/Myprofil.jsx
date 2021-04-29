import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#F6C179",
    margin: "100px 300px",
    padding: "50px",
    borderRadius: "30px",
    marginBottom: "270px",
    boxShadow: "22px 22px 4px 2px #FFF2D9",
  },
  image: {
    height: 200,
    width: 200,
  },

  name: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Lato, sans-serif, Black italic",
  },
}));

function Myprofil(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.name}>
        <h1>Ginette Dupond</h1>
        <p>gigi@gmail.com</p>
      </div>
      <div>
        <Avatar
          className={classes.image}
          alt="Ginette"
          src="/assets/img/avatar.jpeg"
        />
      </div>
      <div className={classes.name}>
        <h2>0765432109</h2>
        <p>2 rue du cucu, Bordeaux</p>
      </div>
    </div>
  );
}

export default Myprofil;
