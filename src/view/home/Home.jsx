import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import UserReviewList from "./components/UserReviewList";
import AccueilProp from "./components/AccueilProp";
import AccueilLoc from "./components/AccueilLoc";
import Accroche from "./components/Accroche";

const useStyles = makeStyles((theme) => ({
  carduser: {
    display: "flex",
    padding: "100px",
    marginRight: "200px",
    width: "100%",
  },
  rent: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Accroche />
      </div>
      <div>
        <SearchBar />
      </div>

      <div className={classes.carduser}>
        <UserReviewList className={classes.review} />
        <AccueilLoc className={classes.rent} />
        <AccueilProp className={classes.lessor} />
      </div>
    </>
  );
}

export default Home;
