import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    
    root: { 
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",    
    },

    button: {
        color: "white",
        backgroundColor: "#F6C179",
        marginRight: 200,
        height: '3em',
        marginTop: "20px",
        fontFamily:  "'Comfortaa', cursive",

    },

    title: {
        color: "#4E96AF",
        fontFamily:  "'Fredoka One', cursive",
        marginRight:"800px",
        marginTop:"30px",
        fontSize:"50px",
        
    },
 
    toctoclogo: {
        width: "100px",
        height:"100px",
}
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to="/"> 
                <img src="/assets/img/logoheader.png" alt='logo' className={classes.toctoclogo}/>
            </Link>
            <h1 className= {classes.title}>Toc Toc</h1>
         <Button className={classes.button} variant="contained" color="primary">
             <Link to="/connexion">
                Connexion
            </Link>
        </Button>
        </div>
    );
};

export default Header;

