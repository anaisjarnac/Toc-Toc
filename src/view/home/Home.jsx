import React from 'react';
import { makeStyles } from '@material-ui/core';
import NewUser from "./NewUser";
import NewUserloc from "./NewUserloc";
import { SignalWifi1BarLockSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    carduser: {
      display: "flex",
      padding: "100px",
      marginRight: "200px",
      width: "100%",
      justifyContent: "space-evenly",
    }
}
)
)


function Home(props) {
    const classes= useStyles();
    return (
        <div className={classes.carduser}>
           <NewUser /> 
           <NewUserloc /> 
        </div>
    );
}

export default Home;