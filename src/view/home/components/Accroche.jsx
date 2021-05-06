import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  accroche: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    borderRadius: "50px",
    boxShadow: "2px 4px 4px #FADDB6",
    padding: "30px",
    margin: "auto",
    marginTop: "3.5em",
    marginBottom: "3.5em",
    width: "700px",
  },
});

function Accroche(props) {
  const classes = useStyles();
  return (
    <div className={classes.accroche}>
      <p>
        "Grâce à<strong> Toc Toc, </strong>trouve facilement le logement,
        <strong>la région Bordelaise</strong>, choisis ton quartier favoris et
        nous nous occupons de te proposer des biens parfaitement adéquates,
        appartenant à de supers propriétaires!"
      </p>
    </div>
  );
}

export default Accroche;
