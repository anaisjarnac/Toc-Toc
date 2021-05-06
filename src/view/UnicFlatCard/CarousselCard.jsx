import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  random: {
    margin: "100px",
    backgroundColor: "white",
    width: "40%",
  },
  img: {
    width: "600px",
    maxWidth: "100%",
    height: "auto",
  },
  item: {
    backgroundColor: "white",
  },
});

function CarousselCard({images}) {
  const classes = useStyles();

  console.log(images);

  return (
    <Carousel className={classes.random}>
      {images?.map((item, i) => (
        <Item className={classes.item} key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper>
      <img src={props.item} alt="logo" className={classes.img} />
    </Paper>
  );
}

export default CarousselCard;
