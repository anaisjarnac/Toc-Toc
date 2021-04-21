import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  footerlist: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#4E96AF",
    listStyle: "none",
  },

  button: {
    color: "white",
    backgroundColor: "#F6C179",
    "&:hover": {
      background: "#4E96AF",
    },
    marginRight: 50,
    height: "3em",
    marginTop: "20px",
  },
  title: {
    color: "white",
    fontFamily: "'Fredoka One', cursive",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.foot}>
      <ul className={classes.footerlist}>
        <li>
          <h1 className={classes.title}>Toc Toc</h1>
        </li>
        <li>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
