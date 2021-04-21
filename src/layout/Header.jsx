import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BurgerMenu from "../view/home/components/BurgerMenu";

const useStyles = makeStyles((theme) => ({
  sticky: {
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    color: "white",
    backgroundColor: "#F6C179",
    height: "3em",
    fontFamily: "'Comfortaa', cursive",
    margin: "40px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  burger: {
    color: "white",
    backgroundColor: "#F6C179",
    height: "3em",
    fontFamily: "'Comfortaa', cursive",
    margin: "40px",
    "&:hover": {
      background: "#4E96AF",
    },
  },

  title: {
    color: "#4E96AF",
    fontFamily: "'Fredoka One', cursive",
    fontSize: "40px",
  },

  toctoclogo: {
    width: "150px",
    height: "150px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.sticky}>
      <img
        src="/assets/img/logoheader.png"
        alt="logo"
        className={classes.toctoclogo}
      />
      <h1 className={classes.title}>Toc Toc</h1>
      <Button className={classes.button} variant="contained" color="primary">
        Connexion
      </Button>
      <BurgerMenu />
    </nav>
  );
}

export default Header;
