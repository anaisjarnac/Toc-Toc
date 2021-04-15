import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    heigth: 250,
    borderRadius: '40px',
    boxShadow: '2px 4px 4px #FADDB6',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#8CB0BC',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Loft avec terrasse"
        subheader="Stalingrad"
      />
      <CardMedia
        className={classes.media}
        image="/assets/terrasse.jpg"
        title="Loft avec terrasse"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            1300€/mois<br />
          Ce loft de 100m2 avec son immense terrasse de 80m2 et sa grande pièce à vivre vous apportera tout le conford souhaité dans ce quartier dynamique.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Loft 100m2 <br />
            Terrasse exposé Sud/Sud-Ouest.
          </Typography>
          <Typography paragraph>
            Beaux espaces, grande salle d'eau avec douche italienne et ancienne baignoire. Cuisine tout équipé.
          </Typography>
          <Typography paragraph>
            Au 4ème et dernier étage avec ascenseur. Aucun vis-à-vis. Belle vue.
          </Typography>
          <Typography paragraph>
            Voisinage agréable
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}