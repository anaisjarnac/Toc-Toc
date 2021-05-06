import React from "react";
import { makeStyles } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme) => ({
  userReviewContainer: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: "white",
    boxShadow: "#FADDB6 0px 2px 8px 0px",
    borderRadius: 5,
  },

  avatar: {
    borderRadius: "50%",
    width: 80,
    height: 80,
  },

  profilContainer: {
    maxHeight: 50,
    margin: "15px 15px",
  },

  name: {
    margin: 0,
    paddingBottom: -2,
    fontFamily: "'Caveat', cursive",
    fontSize: "20px",
    color: "#F6C179",
  },

  profil: {
    margin: 0,
    fontFamily: "'Comfortaa', cursive",
    fontSize: "12px",
    color: "#8CB0BC",
  },

  wraperFlex: {
    display: "flex",
  },

  userReview: {
    margin: "10px",
    padding: 5,
    overflowWrap: "anywhere",
    fontFamily: "'Roboto', sans-serif",
  },
  faceicon: {
    color: "#8CB0BC",
    fontSize: "15px",
    marginRight: "10px",
    marginBottom: "30px",
  },
}));

function UserReview({ name, avatar, profil, review }) {
  const classes = useStyles();
  return (
    <div className={classes.userReviewContainer}>
      <div className={classes.wraperFlex}>
        <img className={classes.avatar} src={avatar} alt="" />
        <div className={classes.profilContainer}>
          <h3 className={classes.name}>{name}</h3>
          <h4>
            <ListItemIcon className={classes.profil}>
              <FaceIcon className={classes.faceicon} />
              {profil}
            </ListItemIcon>
          </h4>
        </div>
      </div>
      <div className={classes.userReview}>{review}</div>
    </div>
  );
}

export default UserReview;
