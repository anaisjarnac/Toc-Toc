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
    height: "80px",
  },
  button: {
    color: "white",
    backgroundColor: "#F6C179",
    height: "3em",
    fontFamily: "'Comfortaa', cursive",
    marginTop: "18px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  burger: {
    color: "white",
    backgroundColor: "#F6C179",
    height: "2.5em",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  title: {
    fontFamily: "'Caveat', cursive",
    color: "#8CB0BC",
    fontSize: "60px",
    background: "none",
    border: "none",
    marginBottom: "10px",
  },
  toctoclogo: {
    width: "130px",
    height: "130px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  name: {
    color: "#F6C179",
    fontFamily: "'Caveat', cursive",
    fontSize: "30px",
    marginTop: "18px",
    marginRight: "10px",
  },
  user: {
    display: "flex",
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
          src="/assets/img/logoheader.png"
          alt="logo"
          className={classes.toctoclogo}
        />
      </Link>

      <Link to="/" className={classes.title} style={{ textDecoration: "none" }}>
        Toc Toc
      </Link>

      {Object.keys(connectedUser).length > 0 && (
        <div className={classes.user}>
          <div className={classes.name}>{connectedUser.firstName}</div>
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
      <BurgerMenu />
    </nav>
  );
}

export default Header;
