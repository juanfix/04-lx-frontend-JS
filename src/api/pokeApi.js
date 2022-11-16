import axios from 'axios';

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const getPokemon = async (pokemonValue) => {
  const response = await pokemonApi.get(pokemonValue);
  return response;
};
