function api() {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((json) => {
      return json.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          specie: character.species,
          planet: character.location.name,
          episodes: character.episode,
          lifestatus: character.status,
        };
      });
    });
}

export default api;
