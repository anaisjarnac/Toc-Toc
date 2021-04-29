import React from "react";
import UserReview from "./UserReview";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    marginTop: 0,
    width: 300,
    marginLeft: -50,
  },
}));

function UserReviewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.listContainer}>
      <UserReview
        name="Joe"
        avatar="https://randomuser.me/api/portraits/men/36.jpg"
        profil="Locataire"
        review="Joe est super précotionneux! Il fera un parfait locataire."
      />

      <UserReview
        name="Laura"
        avatar="https://randomuser.me/api/portraits/women/85.jpg"
        profil="Propriétaire"
        review="Son appart est super! En plus elle est super arrangeante."
      />
    </div>
  );
}

export default UserReviewList;
