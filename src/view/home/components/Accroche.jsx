import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accroche: {
        fontFamily: "'Comfortaa', cursive",
        fontSize: "20px",
        textAlign: "center",
        marginBottom:"100px",
        marginTop:"-50px",
    }
  });
  
function Accroche(props) {
    const classes = useStyles();
    return (
        <div className={classes.accroche}>
        <p><strong>Trouve le logement, le propriétaire et le locataire<br/><br/> de tes rêves avec Toc Toc ! </strong></p>
        </div>
    );
}

export default Accroche;