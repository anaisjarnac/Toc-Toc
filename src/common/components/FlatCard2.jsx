import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
        // avatar={
        //   <Avatar
        //     src={props.avatar}
        //     aria-label="recipe"
        //     className={classes.avatar}
        //   >
        //     {props.avatar}
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.city}
        // subheader={props.district}
      />
      <CardMedia
        className={classes.media}
        image={props.images}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
