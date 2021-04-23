import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  filter: {
    marginTop: "50px",
    padding: "50px 0 0 50px",
    // backgroundColor: "#C6DADA",
    borderRadius: "40px",
    boxShadow: "2px 4px 4px #FADDB6",
    width: "400px",
  },
  title: {
    fontSize: "1.2em",
    fontWeight: "bolder",
  },
  diff: {
    color: "#3f51b5",
  },
  champ: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function MarketPlace(props) {
  const classes = useStyles();
  //State et handleChange concernant les 4 chexbox
  const [state, setState] = React.useState({
    checkedFlat: false,
    checkedHome: false,
    checkedFurnished: false,
    checkedUnfurnished: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  //State et handleChange concernant le slider prix
  const [price, setPrice] = React.useState([0, 4000]);

  const handleChangeSlider = (event, newValue) => {
    setPrice(newValue);
  };
  //State et handleChange concernant le slider surface
  const [surface, setSurface] = React.useState([0, 300]);

  const handleChangeSlider2 = (event, newValue) => {
    setSurface(newValue);
  };

  const [ref, setRef] = React.useState("");
  //State et handleChange concernant le textfield reference
  const handleChange2 = (e) => {
    setRef(e.target.value);
  };

  //handleChange concernant la récupération de toutes les valeurs du filter
  const handleClickValidate = () => {
    const newSelection = {
      type: ["Flat", "Home"],
      equipement: ["Furnished", "Unfurnished"],
      price: price,
      surface: surface,
      reference: ref,
    };
    console.log(newSelection);
  };

  return (
    <div className={classes.root}>
      {/* <Grid container>
        <Grid item> */}
      <div className={classes.filter}>
        <div className={classes.box1}>
          <p className={classes.title}>Type</p>
          <FormGroup style={{ flexDirection: "row" }}>
            <Grid container>
              <Grid item xl={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedHome}
                      onChange={handleChange}
                      name="checkedHome"
                      color="default"
                    />
                  }
                  label="Maison"
                />
              </Grid>
              <Grid item xl={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedFlat}
                      onChange={handleChange}
                      name="checkedFlat"
                      color="default"
                    />
                  }
                  label="Appartement"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </div>
        <div className={classes.box2}>
          <p className={classes.title}>Equipement</p>
          <FormGroup style={{ flexDirection: "row" }}>
            <Grid container>
              <Grid item xl={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedFurnished}
                      onChange={handleChange}
                      name="checkedFurnished"
                      color="default"
                    />
                  }
                  label="Meublé"
                />
              </Grid>
              <Grid item xl={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedUnfurnished}
                      onChange={handleChange}
                      name="checkedUnfurnished"
                      color="default"
                    />
                  }
                  label="Non-meublé"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </div>
        <div className={classes.box3}>
          <p className={classes.title}>Prix</p>
          <p>
            Min : <span className={classes.diff}>0 €</span> • Max :{" "}
            <span className={classes.diff}>4000 €</span>
          </p>
          <RangeSlider
            value={price}
            step={100}
            onChange={handleChangeSlider}
            min={0}
            max={4000}
          />
        </div>
        <div className={classes.box4}>
          <p className={classes.title}>Surface</p>
          <p>
            Min : <span className={classes.diff}>0 m²</span> • Max :{" "}
            <span className={classes.diff}>300 m²</span>
          </p>
          <RangeSlider
            value={surface}
            step={10}
            onChange={handleChangeSlider2}
            min={0}
            max={300}
          />
        </div>
        <div className={classes.box5}>
          <p className={classes.title}>Référence (facultatif)</p>
          <p style={{ lineHeight: "1em", width: "80%" }}>
            Si vous souhaitez rechercher une annonce précise dont vous avez la
            référence.
          </p>
          <form className={classes.champ} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Ex: 227087"
              variant="outlined"
              value={ref}
              onChange={handleChange2}
            />
          </form>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClickValidate}
            >
              <Link to="/marketplace">Valider</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default MarketPlace;
