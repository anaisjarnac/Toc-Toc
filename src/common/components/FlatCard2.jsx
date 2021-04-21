import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    heigth: 250,
    borderRadius: "40px",
    boxShadow: "2px 4px 4px #FADDB6",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#8CB0BC",
  },
}));

export default function FlatCard2(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={props.avatarImage}
            aria-label="recipe"
            className={classes.avatar}
          >
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.titre}
        subheader={props.lieu}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.titre}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.prix}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
