import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
          backgroundColor: "white",
          border: '0'
        },
      },

  container: {
    display: "flex",
    margin: 'auto',
    padding: 20,
    borderRadius: '50px',
    backgroundColor: "#FADDB6",
    width: '70%',
},

  button:{
      marginLeft: 50,
      backgroundColor: "white",


  }
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Votre ville..."
          variant="outlined"
        />
      </form>
      <Button className={classes.button} variant="contained">
        <Link to="/marketplace">
          Recherchez
        </Link>
      </Button>
    </div>
  );
}

export default SearchBar;
