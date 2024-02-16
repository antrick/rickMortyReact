import React from 'react'

const Characters = (props) => {
    const {characters,setCharacters} = props;

    const goBack = () =>{
        setCharacters(null);
    }

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={goBack}>Regresar</span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className='character-container' key={index}>
                    
                    <div>
                        <img className='img-character' src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className='alive'/>
                                Alive
                                </>
                            ): character.status === "Dead" ?(
                                <>
                                <span className='dead'/>
                                Dead
                                </>
                            ):(
                                <>
                                <span className='unknown'/>
                                Unknown
                                </>
                            )}
                        </h6>
                        <p className='text-grey'>
                            <span>Episodios: </span>
                            <span>{character.episode.length} </span>
                        </p>
                        <p>
                            <span className='text-grey'>Especie: </span>
                            <span>{character.species}</span>
                        </p>
                        <p>
                            <span className='text-grey'>Genero: </span>
                            <span>{character.gender}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className='back-home' onClick={goBack}>Regresar</span>
    </div>
  )
}

export default Characters;
