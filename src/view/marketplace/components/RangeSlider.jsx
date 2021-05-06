import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "80%",
  },
  slider: {
    color: "#F6C179",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ min, max, step, onChange, value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom></Typography>
      <Slider
        className={classes.slider}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
