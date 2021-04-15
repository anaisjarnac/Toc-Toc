import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    
    foot: { 
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "space-between",  
        backgroundColor: "#4E96AF",  
    },
    button: {
        color: "white",
        backgroundColor: "#4E96AF",
        marginRight: 200,
        height: '3em',
        marginTop: "20px",
    },

}));

function Footer() {
        const classes = useStyles();
        return (
            <div className={classes.foot}>
               <h1 className= {classes.title}>Toc Toc</h1>
            <Button className={classes.button} variant="contained" color="secondary">
             Contact
           </Button>
           </div>
       
        )
    }

export default Footer;

