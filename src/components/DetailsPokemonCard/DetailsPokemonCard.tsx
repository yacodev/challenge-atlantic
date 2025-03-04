import { BasicInformation, Skills } from './components';
import { DetailsPokemonCardProps } from './interface';

export const DetailsPokemonCard = ({
  pokemonDetails,
}: DetailsPokemonCardProps) => {
  return (
    <div className='max-w-4xl mx-auto bg-white  rounded-lg shadow-lg overflow-hidden'>
      <div className='md:flex'>
        <div className='md:w-1/2 p-8 bg-gray-50 '>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            className='w-64 h-64 mx-auto object-contain'
          />
          <h1 className='text-3xl font-bold text-gray-900  capitalize text-center mt-4'>
            {pokemonDetails.name}
          </h1>
          <p className='text-center text-gray-600 '>
            #{String(pokemonDetails.id).padStart(3, '0')}
          </p>
        </div>

        <div className='md:w-1/2 p-8'>
          {pokemonDetails && (
            <>
              <BasicInformation pokemonDetails={pokemonDetails} />

              <hr className='border-t border-gray-200  my-6 mt-6' />

              <Skills pokemonDetails={pokemonDetails} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
