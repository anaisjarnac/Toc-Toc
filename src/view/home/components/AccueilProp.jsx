import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 450,
    backgroundColor: "#C6DADA",
    marginLeft: "10px",
    borderRadius: "20%",
    marginTop: "10px",

    margin: "100px",
  },
  media: {
    height: 250,
  },
  inscris: {
    backgroundColor: "white",
    color: "black",
    fontFamily: "'Comfortaa', cursive",
  },
  cardUser: {
    display: "flex",
    justifyContent: "center",
  },

  cardContent: {
    textAlign: "center",
    marginTop: "10px",
    fontFamily: "'Comfortaa', cursive",
  },

  cardactions: {
    display: "flex",
    justifyContent: "center",
  },
  cardspeak: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.cardUser}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/img/prop.jpeg"
            title=""
          />
          <CardContent>
            <Typography
              className={classes.cardContent}
              gutterBottom
              variant="h5"
              component="h2"
            >
              PROPRIETAIRE
            </Typography>
            <Typography
              className={classes.cardspeak}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Tu veux louer ton bien en toute confiance?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardactions}>
          <Button
            className={classes.inscris}
            size="large"
            color="default"
            to="/inscription"
            component={Link}
          >
            Inscris toi
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
