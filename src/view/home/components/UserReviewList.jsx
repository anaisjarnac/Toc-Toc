import React from "react";
import UserReview from "./UserReview";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    width: 300,
  },
}));

function UserReviewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.listContainer}>
      <UserReview
        name="Charly"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        profil="Locataire"
        review="Charly est super précotionneux! Il fera un parfait locataire."
      />

      <UserReview
        name="Anaïs"
        avatar="https://randomuser.me/api/portraits/women/72.jpg"
        profil="Propriétaire"
        review="Son appart est super! En plus elle est super arrangeante."
      />
      <UserReview
        name="Antoine"
        avatar="https://randomuser.me/api/portraits/men/28.jpg"
        profil="Locataire"
        review="Locataire au top, aucun soucis en 3 ans de location. Je recommande."
      />
    </div>
  );
}

export default UserReviewList;
