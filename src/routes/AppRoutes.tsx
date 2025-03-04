import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Pokemons } from '../pages/Pokemons';
import { Details } from '../pages/Details';
import { PokemonsCaptured } from '../pages/PokemonsCaptured';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/pokemons' element={<Pokemons />} />
      <Route path='/details' element={<Details />} />
      <Route path='/captured' element={<PokemonsCaptured />} />
    </Routes>
  );
};

export default AppRoutes;
