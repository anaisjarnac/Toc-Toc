import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 350,
    color: "#4E96AF",
  },

  burgerbut: {
    color: "white",
    backgroundColor: "#F6C179",
    height: "60px",
    fontFamily: "'Comfortaa', cursive",
    textAlign: "center",
    fontWeight: "bold",
    margin: "40px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  puces: {
    listStyle: "none",
  },
  accueil: {
    border: "none",
    color: "#DB7070",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  nous: {
    border: "none",
    color: "#FF865A",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  ajout: {
    border: "none",
    color: "#F2B869",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },

  market: {
    border: "none",
    color: "#DD9000",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  connexion: {
    border: "none",
    color: "#096565",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  inscription: {
    border: "none",
    color: "#5EB0B3",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  contact: {
    border: "none",
    color: "#8CB0BC",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      fontSize: "17px",
    },
  },
  menuicon: {
    color: "white",
    fontSize: "35px",
    marginLeft: "10px",
  },
  homeicon: {
    color: "#DB7070",
    fontSize: "30px",
  },
  circle: {
    color: "#FF865A",
    fontSize: "30px",
  },
  plus: {
    color: "#F2B869",
    fontSize: "30px",
  },
  loupe: {
    color: "#DD9000",
    fontSize: "30px",
  },
  cadenas: {
    color: "#096565",
    fontSize: "30px",
  },
  inscri: {
    color: "#5EB0B3",
    fontSize: "30px",
  },
  question: {
    color: "#8CB0BC",
    fontSize: "30px",
  },
});

export default function BurgerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.menuburgerlist}>
          <ul className={classes.puces}>
            <li>
              <Button className={classes.accueil} to="/" component={Link}>
                <ListItemIcon>
                  <HomeIcon className={classes.homeicon} />
                </ListItemIcon>
                <strong>ACCUEIL</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.nous} to="/profil" component={Link}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.circle} />
                </ListItemIcon>
                <strong>MON PROFIL</strong>
              </Button>
            </li>
            <li>
              <Button className={classes.ajout} to="/flat" component={Link}>
                <ListItemIcon>
                  <AddLocationIcon className={classes.plus} />
                </ListItemIcon>
                <strong>AJOUTER UN BIEN</strong>
              </Button>
            </li>
            <li></li>
            <li>
              <Button
                className={classes.market}
                to="/marketplace"
                component={Link}
              >
                <ListItemIcon>
                  <SearchIcon className={classes.loupe} />
                </ListItemIcon>
                <strong> MARKET-PLACE</strong>
              </Button>
            </li>
            <Divider />
            <li>
              <Button
                className={classes.connexion}
                to="/connexion"
                component={Link}
              >
                <ListItemIcon>
                  <LockOpenIcon className={classes.cadenas} />
                </ListItemIcon>
                <strong>CONNEXION</strong>
              </Button>
            </li>
            <li>
              <Button
                className={classes.inscription}
                to="/inscription"
                component={Link}
              >
                <ListItemIcon>
                  <AddBoxIcon className={classes.inscri} />
                </ListItemIcon>
                <strong>INSCRIPTION</strong>
              </Button>
            </li>
            <li>
              <Button
                className={classes.contact}
                to="/contact"
                component={Link}
              >
                <ListItemIcon>
                  <ContactSupportIcon className={classes.question} />
                </ListItemIcon>
                <strong>CONTACTEZ-NOUS</strong>
              </Button>
            </li>
          </ul>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.burgerbut}
          >
            <ListItemIcon>
              <MenuIcon className={classes.menuicon} />
            </ListItemIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
