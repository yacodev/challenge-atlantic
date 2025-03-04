import { Button } from '../Button';
import { PokemonCardProps } from './interface';

export const PokemonCard = ({
  pokemon,
  handleNavigate,
  showCaptureButton,
  handleCapture,
}: PokemonCardProps) => {
  return (
    <div
      className='w-48 flex-none bg-white  rounded-xl p-4 
                               shadow-md hover:shadow-xl transition-all duration-300 
                               hover:scale-105 hover:-translate-y-1'
    >
      <div
        className='aspect-square flex items-center justify-center 
                                    bg-gray-50  rounded-lg mb-3'
      >
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='w-32 h-32 object-contain drop-shadow-md'
          />
        )}
      </div>
      <p
        className='text-center text-gray-700 
                                  capitalize font-medium truncate'
      >
        {pokemon.name}
      </p>
      {showCaptureButton && handleCapture && (
        <div className='flex flex-col justify-center mt-2 gap-2'>
          <Button text='Capturar' onClick={() => handleCapture(pokemon)} />
          <Button
            text=' Ver detalles'
            onClick={() => handleNavigate(pokemon.id)}
          />
        </div>
      )}
    </div>
  );
};
