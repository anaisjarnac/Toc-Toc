import React from 'react';
import { makeStyles } from '@material-ui/core';
import NewUser from "./NewUser";
import NewUserloc from "./NewUserloc";



const useStyles = makeStyles(() => ({
    carduser: {
      display: "flex",
      padding: "100px",
      marginRight: "200px",
      width: "100%",
    },
 
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