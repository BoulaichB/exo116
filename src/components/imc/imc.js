import React from 'react';
import './public/css/app.css';

// # Exo 3

// ## Crée un component :
//     - IMC

// ### Dans le component IMC, crée une function qui permet de calculer l'IMC avec les paramètres et afficher le résultat
// * Import dans IMC dans App
// * crée un tableau d'objet et crée plusieur objet avec comme propriété (nom, taille, poids)
// * Formule pour l'IMC : poids/taille²

const Imc = ({_nom, _poids, _taille}) => {
  return (
    <div>
        <div>
            <h1>IMC de {_nom}</h1>
            <span><strong>{_poids}</strong>/{_taille}<sup>2</sup> = {_poids / Math.floor(_taille * _taille)}</span>
        </div>
    </div>
  )
}

export default Imc