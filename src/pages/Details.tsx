import React, { useEffect, useState } from 'react';
import pokemonServices from '../services/pokemonServices';
import {
  PokemonDetails as IPokemonDetails,
  Pokemon,
} from '../interface/pokemon.interface';
import { Button, Loading } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsPokemonCard } from '../components/DetailsPokemonCard/DetailsPokemonCard';
import { usePokemonCapturedStore } from '../store/pokemonCapturedStore';
import { useUser } from '../hooks/useUser';

export const PokemonDetails: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { setListPokemonCaptured } = usePokemonCapturedStore();
  const { userLogged } = useUser();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (id) {
        try {
          const details: IPokemonDetails | null =
            await pokemonServices.getPokemonDetailsById(id);
          if (details) {
            setPokemonDetails(details);
          }
        } catch (error) {
          console.error('Error fetching pokemon details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPokemonDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate('/pokemons');
  };

  const handlePokemonCapture = () => {
    const pokemon: Pokemon = {
      id: pokemonDetails!.id,
      name: pokemonDetails!.name,
      url: '',
      sprites: {
        front_default: pokemonDetails!.sprites.front_default ?? '',
      },
    };

    if (pokemon) {
      setListPokemonCaptured(pokemon);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen bg-gray-100  p-8'>
      <div className='max-w-4xl mx-auto mb-4'>
        <Button text='Volver' onClick={handleGoBack} />
      </div>
      <div>
        <DetailsPokemonCard
          pokemonDetails={pokemonDetails as IPokemonDetails}
          handlePokemonCapture={handlePokemonCapture}
          showCapturedButton={userLogged}
        />
      </div>
    </div>
  );
};
