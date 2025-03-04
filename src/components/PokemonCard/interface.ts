import { Pokemon } from '../../interface';

export interface PokemonCardProps {
  pokemon: Pokemon;
  handleNavigate: (id: number) => void;
  showCaptureButton?: boolean;
  handleCapture?: (pokemon: Pokemon) => void;
}
