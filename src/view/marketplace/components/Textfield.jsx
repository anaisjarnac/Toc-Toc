import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));

function Textfield(props) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Ex: Ref 220778"
          variant="outlined"
        />
      </form>
    </div>
  );
}

export default Textfield;
