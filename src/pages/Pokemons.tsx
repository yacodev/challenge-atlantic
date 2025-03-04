import { useEffect, useState } from 'react';
import { useUserStore } from '../store';
import { pokemonServices } from '../services/pokemonServices';
import { Pokemon } from '../interface';
import { useNavigate } from 'react-router-dom';
import { CardPokemon, Loading } from '../components';

export const Pokemons = () => {
  const { name } = useUserStore();
  //const { listSelectedPokemon } = usePokemonStore();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [loading, setLoading] = useState(true);

  //const { setSelectedPokemon } = usePokemonStore();

  const getListPokemons = async () => {
    try {
      const pokemonList = await pokemonServices.getPokemonList();

      const pokemons: Pokemon[] = await Promise.all(
        pokemonList.pokemons.map(async (pokemonData) => {
          const pokemonInfo = await pokemonServices.getPokemonDetails(
            pokemonData.url
          );
          return {
            id: pokemonInfo!.id,
            name: pokemonData.name,
            url: pokemonData.url,
            sprites: {
              front_default: pokemonInfo!.sprites.front_default ?? '',
            },
          };
        })
      );
      setPokemons(pokemons);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
      return [];
    }
  };

  useEffect(() => {
    const getAllPokemons = async () => {
      setLoading(true);

      await getListPokemons();

      setLoading(false);
    };

    getAllPokemons();
  }, []);

  const handleNavigate = (pokemon: Pokemon) => {
    //setSelectedPokemon(pokemon);
    console.log(pokemon);
    navigate('/details');
  };

  if (loading) {
    return <Loading />;
  }

  const showLoginMessage = name !== '';

  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between mb-8 w-full'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 '>
            Bienvenido, {name}!
          </h1>
          {showLoginMessage ? (
            <span className='text-blue-500  text-2xl'>Logueado</span>
          ) : (
            <span className='text-red-500 text-2xl '>No logueado</span>
          )}
        </div>
        <button
          onClick={() => navigate('/history')}
          className='px-4 py-2 bg-blue-500 hover:bg-blue-600 
                         text-white  rounded-lg
                         flex items-center '
        >
          Ver pokemones capturados
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-4'>
        {pokemons.map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            handleNavigate={handleNavigate}
            key={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
};
