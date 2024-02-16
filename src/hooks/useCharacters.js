import { useState } from "react"
import RickMortyApi from "../api/RickMortyApi";

export const useCharacters = () => {

    const [characters, setCharacters] = useState(null);

    const getCharacters = async () => {
        try {
            const resp = await RickMortyApi();
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            const allCharacters = await resp.json();
            setCharacters(allCharacters.results); // Asumimos que la peticion se realiza correctamente y nos regresa los datos
        } catch (error) {
            
        } finally {
            
        }

    };
 
    return {
        getCharacters,
        characters,
        setCharacters
    }
}


