import React from "react";
import FlatCard2 from "./FlatCard2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  flat: {
    display: "flex",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
}));

function FlatCardList({ cards }) {
  const classes = useStyles();
  return (
    <div className={classes.flat}>
      <Grid container spacing={3}>
        {cards.map((flat, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <FlatCard2 {...flat} cards={cards} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FlatCardList;
