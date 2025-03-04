import { useEffect, useState } from 'react';
import { useUserStore } from '../store';
import { pokemonServices } from '../services/pokemonServices';
import { Pokemon } from '../interface';
import { useNavigate } from 'react-router-dom';
import { PokemonCard, Loading, Button } from '../components';
import { usePokemonCapturedStore } from '../store/pokemonCapturedStore';

export const Pokemons = () => {
  const { name } = useUserStore();
  const { listPokemonCaptured, setListPokemonCaptured } =
    usePokemonCapturedStore();

  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPokemons = async () => {
      setLoading(true);

      await getListPokemons();

      setLoading(false);
    };

    getAllPokemons();
  }, []);

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

  const handleNavigateToDetails = (id: number) => {
    navigate('/details/' + id);
  };

  const handleNavigateToCaptured = () => {
    navigate('/captured');
  };

  const handlePokemonCapture = (pokemon: Pokemon) => {
    console.log('pokemon captured', pokemon);
    setListPokemonCaptured(pokemon);
    console.log('listPokemonCaptured', listPokemonCaptured);
  };

  const userLogged = name !== '';

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between mb-8 w-full'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 '>
            Bienvenido, {name}!
          </h1>
          {userLogged ? (
            <span className='text-blue-500  text-2xl'>Logueado</span>
          ) : (
            <span className='text-red-500 text-2xl '>No logueado</span>
          )}
        </div>
        <Button
          text='ver pokemones capturas'
          onClick={handleNavigateToCaptured}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-4'>
        {pokemons.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            handleNavigate={handleNavigateToDetails}
            key={pokemon.name}
            showCaptureButton={userLogged}
            handleCapture={handlePokemonCapture}
          />
        ))}
      </div>
    </div>
  );
};
