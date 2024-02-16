import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useCharacters } from './hooks/useCharacters';
import { useEffect } from 'react';
import Characters from './components/Characters';

function App() {

  const { characters, setCharacters , getCharacters } = useCharacters();

  const reqApi = async  () =>{
    await getCharacters();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ):(
          <>
            <img src={imgRickMorty} alt='rick&Morty' className='img-home' />
            <button onClick={ reqApi } className='btn-search'>Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
