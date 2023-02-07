import Imc from './components/imc/imc';
import Bouton from './components/bouton/bouton';

function App() {
  const people = [
    {
      nom: 'Jean',
      poids: 80,
      taille: 1.78
    },
    {
      nom: 'Mathieu',
      poids: 65,
      taille: 1.74
    },
    {
      nom: 'Mahmoud',
      poids: 75,
      taille: 1.80
    },
    {
      nom: 'Yasmin',
      poids: 60,
      taille: 1.65
    }
  ]

  const Bonjour = () => {
    console.log('Bonjour');
  }
  
  return (
    <div>
      {people.map(person => (
        <Imc _nom={person.nom} _poids={person.poids} _taille={person.taille}/>
      ))
      }
      <Bouton _type='button' _onclick={Bonjour} _click='bonjour'/>
      <Bouton _type='submit' _click='click'/>
    </div>
  );
}

export default App;
