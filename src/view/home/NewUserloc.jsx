import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 400,
    backgroundColor: "#C6DADA",
  },
  media: {
    height: 200,
  },
  inscris: {
    backgroundColor: "white",
    color: "#8CB0BC",
  },
  ensavoirplus: {
    backgroundColor: "white",
    color: "#8CB0BC",
  },
  cardUser: {
    display:"flex",
    justifyContent: "center",
  },

  cardContent: {
    textAlign: "center",
  },
  cardactions: {
    display:"flex",
    justifyContent: "center",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.cardUser}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/img/loc.jpeg"
          title=""
        />
        <CardContent>
          <Typography className={classes.cardContent} gutterBottom variant="h5" component="h2">
            Locataire
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tu veux louer ton bien en toute confiance?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardactions}>
        <Button className={classes.inscris} size="small" color="primary">
          Inscris toi
        </Button>
        <Button className={classes.ensavoirplus} size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
