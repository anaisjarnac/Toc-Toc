import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import BurgerMenu from "../view/home/components/BurgerMenu";
import Inscription from "../view/inscription/Inscription";

const useStyles = makeStyles((theme) => ({
  sticky: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFF2D9",
    boxShadow: "0 3px 6px -1px #8CB0BC",
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
    color: "black",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "40px",
    marginRight: "500px",
  },

  toctoclogo: {
    width: "130px",
    height: "130px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.sticky}>
      <Link to="/">
        <img
          src="/assets/img/logoblue.png"
          alt="logo"
          className={classes.toctoclogo}
        />
      </Link>
      <h1 className={classes.title}>Toc Toc</h1>
      <Button
        className={classes.button}
        to="/connexion"
        component={Link}
        variant="contained"
        color="primary"
      >
        Connexion
      </Button>
      <BurgerMenu />
    </nav>
  );
}

export default Header;

// {connectUser && (
//   <p>{connectUser}</p>
// )}
// {!connectUser && <Inscription />}