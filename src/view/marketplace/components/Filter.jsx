import React, { useState } from 'react';
import RangeSlider from './RangeSlider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  filter: {
    marginTop: '50px',
    padding: '50px 0 0 50px',
    // backgroundColor: "#C6DADA",
    borderRadius: '40px',
    boxShadow: '2px 4px 4px #FADDB6',
    width: '400px',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bolder',
  },
  diff: {
    color: '#3f51b5',
  },
  champ: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Filter(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    location: '',
    price: [0, 4000],
    area: [0, 300],
    type: [],
    furnished: '',
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

  const postForm = () => {
    const token = localStorage.getItem('userToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        'https://toctoc-api.herokuapp.com/flat/search',
        {
          ...form,
          price: { min: form.price[0], max: form.price[1] },
          area: { min: form.area[0], max: form.area[1] },
        },
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleClickValidate = () => {
    console.log(form);
    postForm();
  };

  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <div className={classes.box1}>
          <p className={classes.title}>Type</p>

          <div>
            <h2>Où se situe votre bien?</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                label="Ville"
                variant="outlined"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </form>
          </div>

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
            <h2>Votre bien est-il meublé?</h2>

            <RadioGroup
              name="furnished"
              value={form.furnished}
              onChange={handleChange}
            >
              <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="Non" control={<Radio />} label="Non" />
            </RadioGroup>
          </div>

          <div className={classes.box3}>
            <p className={classes.title}>Prix</p>
            <p>
              Min : <span className={classes.diff}>0 €</span> • Max :{' '}
              <span className={classes.diff}>4000 €</span>
            </p>
            <RangeSlider
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
              Min : <span className={classes.diff}>0 m²</span> • Max :{' '}
              <span className={classes.diff}>300 m²</span>
            </p>
            <RangeSlider
              value={form.area}
              step={10}
              onChange={handleArea}
              min={0}
              max={300}
              name="area"
            />
          </div>

          <div style={{ textAlign: 'center' }}>
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
    </div>
  );
}

export default Filter;