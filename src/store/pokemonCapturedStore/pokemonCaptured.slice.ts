import { StateCreator } from 'zustand';
import { PokemonCapturedState } from '../interfaces';

export const pokemonCapturedSlice: StateCreator<PokemonCapturedState> = (
  set,
  get
) => ({
  pokemonCaptured: null,
  listPokemonCaptured: [],
  setPokemonCaptured: (pokemon) => set({ pokemonCaptured: pokemon }),
  setListPokemonCaptured: (pokemon) =>
    set({ listPokemonCaptured: [pokemon, ...get().listPokemonCaptured] }),
});
