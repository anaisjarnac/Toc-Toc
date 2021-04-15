import React from "react";
import CheckBox from "./components/CheckBox";
//import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Textfield from "./components/Textfield";
import Button from "./components/Button";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "solid 3px black",

    margin: "auto",
    width: "600px",
    marginTop: "50px",
    paddingLeft: "15px",
    height: "800px",
  },
  box1: {
    display: "flex",
  },
  box2: {},

  box3: {},

  box4: {
    display: "flex",
    flexDirection: "column",
  },
  box5: {
    display: "flex",
    flexDirection: "column",
  },
  box6: {
    display: "flex",
    flexDirection: "column",
  },
});

function MarketPlace(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box1}>
        <p>Filtres</p>
        {/*<IconButton size="medium">
          <HighlightOffIcon />
          </IconButton>*/}
      </div>
      <div className={classes.box2}>
        <p>Type</p>
        <CheckBox label="Appartement" />
        <CheckBox label="Maison" />
      </div>
      <div className={classes.box3}>
        <p>Equipement</p>
        <CheckBox label="Meublé" />
        <CheckBox label="Non-meublé" />
      </div>
      <div className={classes.box4}>
        <p>Prix</p>
        <p>Min : 0 € • Max : 6000 €</p>
        <Slider1 />
      </div>
      <div className={classes.box5}>
        <p>Surface</p>
        <p>Min : 0 m² • Max : 300 m²</p>
        <Slider2 />
      </div>
      <div className={classes.box6}>
        <p>Référence (facultatif)</p>
        <p>
          Si vous souhaitez rechercher une annonce précise et que vous avez la
          référence.
        </p>
        <Textfield />
        <Button />
      </div>
    </div>
  );
}

export default MarketPlace;
