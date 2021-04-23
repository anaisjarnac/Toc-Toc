import React from "react";
import Filter from "./components/Filter";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import FlatCardList from "../../common/components/FlatCardList";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function MarketPlace() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container>
        <Grid item> */}
      <div>
        <Filter />
      </div>
      {/* </Grid>
      </Grid> */}
      <Container>
        <div>
          <FlatCardList />
        </div>
      </Container>
    </div>
  );
}

export default MarketPlace;
