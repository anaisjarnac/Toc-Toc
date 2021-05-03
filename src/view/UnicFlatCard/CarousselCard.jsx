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

function CarousselCard(props) {
  const classes = useStyles();
  const items = [
    {
      image: "/assets/img/flat-img/salon.jpg",
    },
    {
      image: "/assets/img/flat-img/terrasse.jpg",
    },
    {
      image: "/assets/img/flat-img/studio.jpg",
    },
  ];

  return (
    <Carousel className={classes.random}>
      {items.map((item, i) => (
        <Item className={classes.item} key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper>
      <img src={props.item.image} className={classes.img} />
    </Paper>
  );
}

export default CarousselCard;
