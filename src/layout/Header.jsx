import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    
    root: { 
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",    
    },

    button: {
        color: "white",
        backgroundColor: "#4E96AF",
        marginRight: 200,
        height: '3em',
        marginTop: "20px",
    },
    
    title: {
        color: "#4E96AF",
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
      
         <img src="/assets/img/logo.png" alt='logo' className={classes.toctoclogo} />
            <h1 className= {classes.title}>Toc Toc</h1>
         <Button className={classes.button} variant="contained" color="secondary">
          Connexion
        </Button>
        </div>
    
        
    );
};

export default Header;

