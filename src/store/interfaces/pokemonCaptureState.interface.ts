import { Pokemon } from '../../interface';

export interface PokemonCapturedState {
  pokemonCaptured: Pokemon | null;
  listPokemonCaptured: Pokemon[];
  setPokemonCaptured: (pokemon: Pokemon) => void;
  setListPokemonCaptured: (pokemon: Pokemon) => void;
}
