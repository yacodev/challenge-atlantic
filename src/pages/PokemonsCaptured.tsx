import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../interface';
import { usePokemonCapturedStore } from '../store/pokemonCapturedStore';
import { Button, PokemonCard } from '../components';

export const PokemonsCaptured = () => {
  const { listPokemonCaptured } = usePokemonCapturedStore();
  const navigate = useNavigate();

  console.log('listPokemonCaptured', listPokemonCaptured);

  const handleGoBack = () => {
    navigate('/pokemons');
  };

  const handleNavigateToDetails = (id: number) => {
    navigate('/details/' + id);
  };

  return (
    <div className='min-h-screen bg-gray-50  transition-colors duration-200 mx-auto px-4'>
      <div className='py-12'>
        <div className='flex items-center justify-between mb-8 mt-'>
          <h1 className='text-3xl font-extrabold text-gray-900 '>
            Pokemones capturados
          </h1>
        </div>

        <div className='mb-4'>
          <Button text='Volver' onClick={handleGoBack} />
        </div>

        {listPokemonCaptured.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-12 bg-white  rounded-lg shadow-md'>
            <p className='text-xl text-gray-600 '>No hay pokémon capturados</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
            {listPokemonCaptured.map((pokemon: Pokemon, index: number) => {
              return (
                <div
                  key={`${pokemon.id}-${index}`}
                  className='transform transition-all duration-300 hover:-translate-y-1 mb-6'
                >
                  <PokemonCard
                    pokemon={pokemon}
                    handleNavigate={handleNavigateToDetails}
                    key={pokemon.name}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
