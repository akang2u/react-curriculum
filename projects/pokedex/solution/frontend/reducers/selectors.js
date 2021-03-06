import { values } from 'lodash';

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  const foundItem = pokemonDetail.items.find(item => item.id === itemId);
  return foundItem || {};
}

export const selectAllPokemon = ({ pokemon }) => values(pokemon.entities);
