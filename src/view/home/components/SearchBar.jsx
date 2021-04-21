import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80ch",
      backgroundColor: "white",
      borderRadius: "50px",
      border: "none",
      fontFamily: "'Comfortaa', cursive",
      "&:hover": {
        border: "none",
      },
    },
  },

  container: {
    display: "flex",
    margin: "auto",
    padding: 20,
    borderRadius: "50px",
    backgroundColor: "#F6C179",
    width: "60%",
  },

  button: {
    marginLeft: 15,
    backgroundColor: "white",
    borderRadius: "50px",
    height: "40px",
    marginTop: "15px",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "white",
    },
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Entrez votre ville, votre quartier, votre code postal..."
          variant="outlined"
        />
      </form>
      <Button className={classes.button} variant="contained">
        Recherchez
      </Button>
    </div>
  );
}

export default SearchBar;
