import React from "react";
import FlatCard2 from "./FlatCard2";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const cards = [
  {
    avatar: "R",
    titre: "Loft avec terrasse",
    lieu: "Stalingrad",
    image: "/assets/img/flat-img/terrasse.jpg",
    prix: "1300€",
    description: "Grand Loft de 93m2, terrasse exposé Sud avec vue imprenable",
    reference: "020778",
  },
  {
    avatar: "A",
    titre: "T3 65m2",
    lieu: "Saint-Michel",
    image: "/assets/img/flat-img/salon.jpg",
    prix: "1050€",
    description:
      "T3 avec terrasse, 2 chambres, 2 salle d'eau, belle pièce à vivre",
    reference: "120778",
  },
  {
    avatarImage: "/assets/Nicolas.JPG",
    titre: "Studio 29m2 coin nuit",
    lieu: "Victoire",
    image: "/assets/img/flat-img/studio.jpg",
    prix: "570€",
    description: "Charmant appartement avec cuisine équipé et son coin nuit",
    reference: "220778",
  },
  {
    avatarImage: "/assets/Anais.JPG",
    titre: "T4 89m2",
    lieu: "Chartrons",
    image: "/assets/img/flat-img/T4.jpg",
    prix: "1400€",
    description:
      "Magnifique T4 Proche des quais, appartement tout conford. 3 chambres, 2 salle d'eau. Grand balcon.",
    reference: "320778",
  },
];

const useStyles = makeStyles({});

function FlatCardList(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        {cards.map((flat, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <FlatCard2 {...flat} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FlatCardList;
