import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

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
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default Main;