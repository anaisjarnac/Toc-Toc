import React from "react";
import { makeStyles } from "@material-ui/core";
import UserReview from "../../home/components/UserReview";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "-150px",
    marginRight: "300px",
    marginLeft: "300px",
  },
  user: {
    padding: "30px",
  },
}));

function ProfilReviewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <UserReview
          name="Jean-Michel"
          avatar="https://randomuser.me/api/portraits/men/66.jpg"
          profil="Propriétaire"
          review="Locataire parfait, très respectueux de mon bien. Les paiements ont tous été effectués à temps."
        />
      </div>
      <div className={classes.user}>
        <UserReview
          name="Ana"
          avatar="https://randomuser.me/api/portraits/women/66.jpg"
          profil="Locataire"
          review="Superbe maison en collocation durant mes années d'études, merci!"
        />
      </div>
      <div className={classes.user}>
        <UserReview
          name="Roman"
          avatar="https://randomuser.me/api/portraits/men/35.jpg"
          profil="Locataire"
          review="Trés gentil, la location s'est déroulée à merveille!"
        />
      </div>
    </div>
  );
}

export default ProfilReviewList;
