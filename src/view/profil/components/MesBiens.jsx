import React from "react";
import { makeStyles } from "@material-ui/core";
import FlatCard2 from "../../../common/components/FlatCard2";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: "Lato, sans-serif, Black italic",
    backgroundColor: "white",
    padding: 50,
    marginBottom: "50px",
  },
  flat: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    width: "50px",
    color: "#4E96AF",
  },
}));

function MesBiens(props) {
  const classes = useStyles();

  // const accessToken = localStorage.getItem('userToken');
  // if (accessToken) {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   const userProfile = await axios.get(
  //     'http://toctoc-api.herokuapp.com/users/flat/my-flat',
  //     config
  //   );

  return (
    <div>
      <div className={classes.title}>
        <h1>
          <HomeIcon className={classes.icon} />
          Mes Biens
        </h1>
      </div>
      <div className={classes.flat}>
        <FlatCard2 />
      </div>
    </div>
  );
}

export default MesBiens;
