import { PokemonDetails } from '../../interface/pokemon.interface';

export interface DetailsPokemonCardProps {
  pokemonDetails: PokemonDetails;
  handlePokemonCapture: () => void;
  showCapturedButton?: boolean;
}
