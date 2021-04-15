import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage : "url('/assets/img/background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition : "center",
    }
}
)
)

function Main(props) {
    const classes= useStyles();
    const {children}= props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}

export default Main;