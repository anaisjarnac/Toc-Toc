import React from "react";
import CheckBox from "./components/CheckBox";
import RangeSlider from "./components/RangeSlider";
import Textfield from "./components/Textfield";
import Button from "./components/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import FlatCardList from "../../common/components/FlatCardList";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  filtre: {
    border: "1px solid black",
    marginTop: "50px",
    padding: "50px 0 0 50px",
    lineHeight: "0.5em",
    backgroundColor: "#C6DADA",
    borderRadius: "20%",
  },

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
  title: {
    fontSize: "1.2em",
    fontWeight: "bolder",
  },
  diff: {
    color: "#3f51b5",
  },
});

function MarketPlace(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedF: false,
    checkedH: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state.checkedF);
    console.log(state.checkedH);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.filtre}>
          <Grid container>
            <Grid item xs={12} md={12} lg={4}>
              <div className={classes.box1}>
                <p className={classes.title}>Type</p>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedH}
                            onChange={handleChange}
                            name="checkedH"
                            color="default"
                          />
                        }
                        label="maison"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedF}
                            onChange={handleChange}
                            name="checkedF"
                            color="default"
                          />
                        }
                        label="Appartement"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.box2}>
                <p className={classes.title}>Equipement</p>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <CheckBox label="Meublé" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CheckBox label="Non-meublé" />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.box3}>
                <p className={classes.title}>Prix</p>
                <p>
                  Min : <span className={classes.diff}>0 €</span> • Max :{" "}
                  <span className={classes.diff}>4000 €</span>
                </p>
                <RangeSlider min={0} max={4000} step={100} />
              </div>
              <div className={classes.box4}>
                <p className={classes.title}>Surface</p>
                <p>
                  Min : <span className={classes.diff}>0 m²</span> • Max :{" "}
                  <span className={classes.diff}>300 m²</span>
                </p>
                <RangeSlider min={0} max={300} step={10} />
              </div>
              <div className={classes.box5}>
                <p className={classes.title}>Référence (facultatif)</p>
                <p style={{ lineHeight: "1em" }}>
                  Si vous souhaitez rechercher une annonce précise dont vous
                  avez la référence.
                </p>
                <Textfield />
                <span style={{ textAlign: "right", marginRight: "2em" }}>
                  <Button />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container>
        <div>
          <FlatCardList />
        </div>
      </Container>
    </div>
  );
}

export default MarketPlace;
