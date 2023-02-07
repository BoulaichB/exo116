import React from 'react';
import './public/css/app.css'

// # Exo4
// # Component :
//   - Bouton
// 3 parametres
// type / onclick / click
// type : le type de bouton
// onclick : faire rentrer une fonction.
// click : ce qu'on met dans le bouton. le text.

// Creer 2 bouton differents. 
// un de type button onClick recoit une fonction qui log bonjour et click bonjour.
// un de type submit click = click

const Bouton = ({_type, _onclick, _click}) => {
  return (
    <div>
        <button className='bg-sky-500 text-white border rounded-full w-20 hover:bg-sky-300' type={_type} onClick={_onclick}>{_click}</button>
    </div>
  )
}

export default Bouton