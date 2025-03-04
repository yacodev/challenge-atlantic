import axios from 'axios';
import { PokemonDetails, Pokemon } from '../interface/pokemon.interface';
import { PokemonListResponse } from './interface';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonServices = {
  getPokemonList: async (
    offset: number = 1,
    limit: number = 20
  ): Promise<{ pokemons: Pokemon[]; hasMore: boolean }> => {
    try {
      const { data } = await axios.get<PokemonListResponse>(
        `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
      );

      const pokemonPromises = data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          id: response.data.id,
          name: response.data.name,
          url: pokemon.url,
          sprites: {
            front_default: response.data.sprites.front_default,
          },
        };
      });

      const pokemons = await Promise.all(pokemonPromises);
      return {
        pokemons,
        hasMore: !!data.next,
      };
    } catch (error) {
      console.error('Error fetching pokemon list:', error);
      return {
        pokemons: [],
        hasMore: false,
      };
    }
  },

  getPokemonDetails: async (url: string) => {
    try {
      const { data } = await axios.get<PokemonDetails>(url);
      return data;
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
      return null;
    }
  },
};

export default pokemonServices;
