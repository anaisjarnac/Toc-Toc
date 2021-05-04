import React, { useEffect } from "react";
import ImagesUpload from "./components/ImagesUpload";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "#F6C179",
    "&:hover": {
      background: "#4E96AF",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  flatDescription: {
    width: 600,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function AddFlat({ match }) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    type: "",
    title: "",
    city: "",
    district: "",
    images: [],
    area: 0,
    furnished: "",
    price: "",
    description: "",
  });

  //Check s'il y a une ID pour préremplir le form avec les data de l'API
  useEffect(() => {
    if (match?.params?.id) {
      axios
        .get(` https://toctoc-api.herokuapp.com/flat/${match.params.id} `)
        .then((response) => setForm(response.data));
    }
    console.log(form);
  }, [match.params.id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUploadImage = (imageUrl) => {
    const newImages = [...form.images, imageUrl];
    setForm({ ...form, images: newImages });
    console.log(newImages);
  };

  const history = useHistory();

  const postForm = () => {
    const token = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (match?.params?.id) {
      axios
        .patch(
          `https://toctoc-api.herokuapp.com/flat/${match.params.id}`,
          form,
          config
        )
        //redirection
        .then(() => {
          history.push("/");
        });
    } else {
      axios
        .post("https://toctoc-api.herokuapp.com/flat", form, config)
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const handleClick = () => {
    postForm();
  };

  return (
    <div className={classes.container}>
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
          <FormControlLabel value="furnished" control={<Radio />} label="Oui" />
          <FormControlLabel
            value="unfurnished"
            control={<Radio />}
            label="Non"
          />
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
      <div>
        <h2>Ajouter des photos</h2>
        <div>
          <ImagesUpload
            onUpload={handleUploadImage}
            images={form.images}
            form={form}
          />
        </div>
      </div>
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
        <Button
          variant="contained"
          className={classes.submit}
          color="primary"
          onClick={handleClick}
        >
          Valider
        </Button>
      </div>
    </div>
    </div>
  );
}

export default AddFlat;
