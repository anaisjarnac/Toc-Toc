import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "500px",
      height: "40px",
      backgroundColor: "white",
      borderRadius: "50px",
      border: "none",
      fontFamily: "'Comfortaa', cursive",
      "&:hover": {
        border: "none",
      },
    },
  },

  placeh: {
    padding: "20px",
  },

  container: {
    display: "flex",
    margin: "auto",
    padding: 20,
    borderRadius: "50px",
    backgroundColor: "#8CB0BC",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  button: {
    fontSize: "0.8vw",
    backgroundColor: "#D5E8EF",
    borderRadius: "50px",
    height: "40px",
    margin: "10px",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "#A2E1E3",
    },
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <input
          placeholder="Entrez votre ville, votre quartier, votre département..."
          className={classes.placeh}
        />
      </form>
      <Button
        className={classes.button}
        variant="contained"
        to="/marketplace"
        component={Link}
      >
        Recherchez
      </Button>
    </div>
  );
}

export default SearchBar;
