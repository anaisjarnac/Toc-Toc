import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userReviewContainer: {
    padding: 10,
    marginBottom: 20,
    height: 150,
    backgroundColor: "#FADDB6",
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
    paddingBottom: 10,
  },

  profil: {
    margin: 0,
  },

  wraperFlex: {
    display: "flex",
  },

  userReview: {
    marginTop: 5,
    padding: 5,
    overflowWrap: "anywhere",
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
          <h4 className={classes.profil}>{profil}</h4>
        </div>
      </div>
      <div className={classes.userReview}>{review}</div>
    </div>
  );
}

export default UserReview;
