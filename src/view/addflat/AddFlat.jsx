import React, { useState } from 'react';
import ImagesUpload from './components/ImagesUpload';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  flatDescription: {
    width: 600,
  },
}));

function AddFlat(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    type: '',
    title: '',
    city: '',
    district: '',
    images: [],
    area: '',
    furnished: '',
    price: '',
    description: '',
  });

  // const handleUploadImage = (imageUrl) => {
  //   setImage((images) => [...images, imageUrl]);
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


//   const config = {
//     headers: { "Authorization": `Bearer ${token}` }
// };

  // const postForm = () => {
  //   axios.post("https://toctoc-api.herokuapp.com/flat", form, config)
  //   .then(res => {
  //     console.log(res);
  //   })
  // }

  const postForm = () => {
    axios.post("https://toctoc-api.herokuapp.com/flat", form, {
      headers: {
        'Authorization': `Bearer ${token}` }
      })
    .then(res => {
      console.log(res);
    })
  }

  const handleClick = () => {
    console.log(form);
    postForm();
  };

  return (
    <div>
      <div>
        <h2>Titre de votre annonce</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Titre de l'annonce"
            variant="outlined"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <h2>Quel type de bien souhaitez-vous louer?</h2>
        <RadioGroup value={form.type} onChange={handleChange} name="type">
          <FormControlLabel
            value="flat"
            control={<Radio />}
            label="Appartement"
          />
          <FormControlLabel value="house" control={<Radio />} label="Maison" />
        </RadioGroup>
      </div>
      <div>
        <h2>Quelle est la surface de votre bien?</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Surface en m2"
            variant="outlined"
            name="area"
            value={form.area}
            onChange={handleChange}
          />
        </form>
      </div>
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
      <div>
        <h2>À quel prix souhaitez-vous louer votre bien?</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Prix en €"
            variant="outlined"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <h2>Ajouter une description de votre bien</h2>
        <TextField
          className={classes.flatDescription}
          id="outlined-textarea"
          label="Entrez votre description..."
          placeholder="Placeholder"
          multiline
          rows={6}
          variant="outlined"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <h2>Ajouter des photos</h2>
        <div>
          <ImagesUpload onUpload={handleUploadImage} images={image} />
        </div>
      </div> */}
      <div>
        <h2>Où se situe votre bien?</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Ville"
            variant="outlined"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Quartier"
            variant="outlined"
            name="district"
            value={form.district}
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Valider
        </Button>
      </div>
    </div>
  );
}

export default AddFlat;
