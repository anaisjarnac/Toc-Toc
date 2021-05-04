import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footerlist: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFF2D9",
    listStyle: "none",
  },
  button: {
    color: "white",
    backgroundColor: "#F6C179",
    "&:hover": {
      background: "#4E96AF",
    },
    marginRight: 50,
    marginBottom: 20,
    height: "3em",
    marginTop: "20px",
    fontFamily: "'Comfortaa', cursive",
  },
  title: {
    color: "black",
    fontFamily: "'Fredoka One', cursive",
    marginTop: 30,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.foot}>
      <ul className={classes.footerlist}>
        <li>
          <Button className={classes.title} to="/" component={Link}>
            Toc Toc
          </Button>
        </li>
        <li>
          <Button
            className={classes.button}
            to="/contact"
            component={Link}
            variant="contained"
            color="primary"
          >
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
