import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function EditFlat(props) {
  const [myFlat, setMyFlat] = React.useState({
    avatar: 'R',
    titre: 'Loft avec terrasse',
    lieu: 'Stalingrad',
    image: '/assets/img/flat-img/terrasse.jpg',
    prix: '1300€',
    description: 'Grand Loft de 93m2, terrasse exposé Sud avec vue imprenable',
    reference: '020778',
  });

  return (
    <div>

    </div>
  );
}

export default EditFlat;
