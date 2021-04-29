import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accroche: {
        fontFamily: "'Comfortaa', cursive",
        fontSize: "18px",
        textAlign: "center",
        marginBottom:"100px",
        marginTop:"-50px",
    }
  });
  
function Accroche(props) {
    const classes = useStyles();
    return (
        <div className={classes.accroche}>
        <p>"Trouve <em>le logement, le propriétaire et le locataire</em> de tes rêves avec<strong> Toc Toc !" </strong></p>
        </div>
    );
}

export default Accroche;