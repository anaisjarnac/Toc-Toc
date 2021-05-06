import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: "url('/assets/img/fond2.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

function Main(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
