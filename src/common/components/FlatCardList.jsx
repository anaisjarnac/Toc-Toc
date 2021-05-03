import React from "react";
import FlatCard2 from "./FlatCard2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({});

function FlatCardList({ cards }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        {cards.map((flat, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <FlatCard2 {...flat} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FlatCardList;
