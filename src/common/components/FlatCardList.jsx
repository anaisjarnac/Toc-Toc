import React from 'react';
import FlatCard2 from './FlatCard2';

const cards = [
    {
        avatar: "R",
        titre: "Loft avec terrasse",
        lieu: "Stalingrad",
        image: "/assets/img/flat-img/terrasse.jpg",
        prix: "1300€",
        description: "Grand Loft de 93m2, terrasse exposé Sud avec vue imprenable"
    },
    {
        avatar: "A",
        titre: "T3 65m2",
        lieu: "Saint-Michel",
        image: "/assets/img/flat-img/salon.jpg",
        prix: "1050€",
        description: "T3 avec terrasse, 2 chambres, 2 salle d'eau, belle pièce à vivre"
    },
    {
        avatarImage: "/assets/Nicolas.JPG",
        titre: "Studio 29m2 avec coin nuit",
        lieu: "Victoire",
        image: "/assets/img/flat-img/studio.jpg",
        prix: "570€",
        description: "Charmant appartement avec cuisine équipé et son coin nuit"
    },
    {
        avatarImage: "/assets/Anais.JPG",
        titre: "T4 89m2",
        lieu: "Chartrons",
        image: "/assets/img/flat-img/T4.jpg",
        prix: "1400€",
        description: "Magnifique T4 Proche des quais, appartement tout conford. 3 chambres, 2 salle d'eau. Grand balcon."
    },
]

function FlatCardList(props) {
    return (
        <div>
            {cards.map((flat, index) => (
                <FlatCard2 
                    key={index}
                    {...flat}
                />
            ))}
        </div>
    );
}

export default FlatCardList;