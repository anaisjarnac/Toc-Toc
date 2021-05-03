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
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  nous: {
    border: "none",
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#F6C179",
    },
  },
  market: {
    border: "none",
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#C2ECFA",
    },
  },
  connexion: {
    border: "none",
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  inscription: {
    border: "none",
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#F6C179",
    },
  },
  contact: {
    border: "none",
    color: "black",
    padding: "20px",
    backgroundColor: "white",
    fontFamily: "'Comfortaa', cursive",
    fontSize: "15px",
    "&:hover": {
      background: "#C2ECFA",
    },
  },
  menuicon: {
    color: "white",
    fontSize: "35px",
    marginLeft: "10px",
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
                  <HomeIcon />
                </ListItemIcon>
                HOME
              </Button>
            </li>
            <li>
              <Button className={classes.nous} to="/profil" component={Link}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                MON PROFIL
              </Button>
            </li>
            <li>
              <Button className={classes.nous} to="/flat" component={Link}>
                <ListItemIcon>
                  <AddLocationIcon />
                </ListItemIcon>
                add
              </Button>
            </li>
            <li>
              <Button className={classes.nous} to="/edit/:id" component={Link}>
                <ListItemIcon>
                  <AddLocationIcon />
                </ListItemIcon>
                edit
              </Button>
            </li>
            <li>
              <Button
                className={classes.market}
                to="/marketplace"
                component={Link}
              >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                MARKET-PLACE
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
                  <LockOpenIcon />
                </ListItemIcon>
                CONNEXION
              </Button>
            </li>
            <li>
              <Button
                className={classes.inscription}
                to="/inscription"
                component={Link}
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                INSCRIPTION
              </Button>
            </li>
            <li>
              <Button
                className={classes.contact}
                to="/contact"
                component={Link}
              >
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                CONTACTEZ-NOUS
              </Button>
            </li>
            <li>
              <Button className={classes.contact} to="/unic" component={Link}>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                BIEN SUR PAGE UNIQUE
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
