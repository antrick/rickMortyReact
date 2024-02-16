const RickMortyApi = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return response;
  };

export default RickMortyApi;