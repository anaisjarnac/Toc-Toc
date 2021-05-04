import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import BurgerMenu from "../view/home/components/BurgerMenu";

import UserContext from "../context/user";

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
    margin: "45px",
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
  const { connectedUser, setConnectedUser } = useContext(UserContext);
  const history = useHistory();

  const handleClick = () => {
    setConnectedUser({});
    localStorage.removeItem("userToken");
    history.push("/");
  };

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

      <div>
        {Object.keys(connectedUser).length > 0 && (
          <div>
            {connectedUser.firstName}
            <Button
              className={classes.button}
              to="/connexion"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Déconnexion
            </Button>
          </div>
        )}
        {Object.keys(connectedUser).length === 0 && (
          <Button
            className={classes.button}
            to="/connexion"
            component={Link}
            variant="contained"
            color="primary"
          >
            Connexion
          </Button>
        )}
      </div>
      <BurgerMenu />
    </nav>
  );
}

export default Header;
