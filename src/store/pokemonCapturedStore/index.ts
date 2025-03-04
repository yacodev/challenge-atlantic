import { createStore } from '../createStore';
import { PokemonCapturedState } from '../interfaces';
import { pokemonCapturedSlice } from './pokemonCaptured.slice';

export const usePokemonCapturedStore = createStore<PokemonCapturedState>(
  [pokemonCapturedSlice],
  {
    name: 'pokemonCaptured',
  }
);
