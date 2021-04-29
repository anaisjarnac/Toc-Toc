import React from 'react';
import ImagesUpload from './components/ImagesUpload';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core';

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

function DeposerBien(props) {
  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('');
  const [isFurnished, setIsFurnished] = React.useState('');
  const [surface, setSurface] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [city, setCity] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [image, setImage] = React.useState([]);

  const handleClickFinaleValidation = () => {
    const newFlat = {
      titre: title,
      type: type,
      surface: surface,
      meuble: isFurnished,
      prix: price,
      description: description,
      ville: city,
      quartier: district,
      image: image,
    };
    console.log(newFlat);
  };

  const handleUploadImage = (imageUrl) => {

    //setImage(imageUrl);
    //image.push(imageUrl);
    setImage(images => [...images, imageUrl]);
  };

  return (
    <div>
      <div>
        <h2>Titre de votre annonce</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Titre de l'annonce"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </div>
      <div>
        <h2>Quel type de bien souhaitez-vous louer?</h2>
        <RadioGroup value={type} onChange={(e) => setType(e.target.value)}>
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
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
          />
        </form>
      </div>
      <div>
        <h2>Votre bien est-il meublé?</h2>

        <RadioGroup
          value={isFurnished}
          onChange={(e) => setIsFurnished(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <h2>Ajouter des photos</h2>
        <div>
        <ImagesUpload  onUpload={handleUploadImage} images={image}/>
        </div>
      </div>
      <div>
        <h2>Où se situe votre bien?</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Ville"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Quartier"
            variant="outlined"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </form>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickFinaleValidation}
        >
          Valider
        </Button>
      </div>
    </div>
  );
}

export default DeposerBien;
