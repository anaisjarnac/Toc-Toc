import React from "react";
import RangeSlider from "./RangeSlider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    display: "flex",
  },
  filter: {
    marginTop: "50px",
    padding: "50px 0 0 50px",
    borderRadius: "40px",
    boxShadow: "2px 4px 4px #FADDB6",
    width: "400px",
    backgroundColor: "white",
  },
  title: {
    fontSize: "1.2em",
    fontWeight: "bolder",
  },
  diff: {
    color: "black",
  },
  champ: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
  button: {
    margin: theme.spacing(3, 0, 2, 12),
    backgroundColor: "#F6C179",
    display: "flex",
    width: "100px",

    "&:hover": {
      background: "#4E96AF",
    },
  },
}));

function Filter({ postForm }) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    location: "",
    price: [0, 4000],
    area: [0, 300],
    type: [],
    furnished: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePrice = (event, newValue) => {
    setForm({ ...form, price: newValue });
  };

  const handleArea = (event, newValue) => {
    setForm({ ...form, area: newValue });
  };

  const handleClickValidate = () => {
    console.log(form);
    postForm(form);
  };

  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <div className={classes.box1}>
          <div>
            <p className={classes.title}>Où se situe votre bien?</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                label="Quartier"
                variant="outlined"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </form>
          </div>
          <p className={classes.title}>Type</p>

          <Grid container>
            <Grid item xl={6}>
              <RadioGroup value={form.type} onChange={handleChange} name="type">
                <FormControlLabel
                  value="flat"
                  control={<Radio />}
                  label="Appartement"
                />
                <FormControlLabel
                  value="house"
                  control={<Radio />}
                  label="Maison"
                />
              </RadioGroup>
            </Grid>
          </Grid>

          <div>
            <p className={classes.title}>Meublé</p>

            <RadioGroup
              name="furnished"
              value={form.furnished}
              onChange={handleChange}
            >
              <FormControlLabel
                value="furnished"
                control={<Radio />}
                label="Oui"
              />
              <FormControlLabel
                value="unfurnished"
                control={<Radio />}
                label="Non"
              />
            </RadioGroup>
          </div>

          <div className={classes.box3}>
            <p className={classes.title}>Prix</p>
            <p>
              Min : <span className={classes.diff}>0 €</span> • Max :{" "}
              <span className={classes.diff}>4000 €</span>
            </p>
            <RangeSlider
              className={classes.slider}
              value={form.price}
              step={100}
              onChange={handlePrice}
              min={0}
              max={4000}
              name="price"
            />
          </div>
          <div className={classes.box4}>
            <p className={classes.title}>Surface</p>
            <p>
              Min : <span className={classes.diff}>0 m²</span> • Max :{" "}
              <span className={classes.diff}>300 m²</span>
            </p>
            <RangeSlider
              className={classes.slider}
              value={form.area}
              step={10}
              onChange={handleArea}
              min={0}
              max={300}
              name="area"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
              to="/marketplace"
              component={Link}
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleClickValidate}
            >
              Valider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
