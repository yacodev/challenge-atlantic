import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Pokemons } from '../pages/Pokemons';
import { PokemonDetails } from '../pages/Details';
import { PokemonsCaptured } from '../pages/PokemonsCaptured';
import { ProtectedRoute } from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/pokemons' element={<Pokemons />} />
      <Route path='/details/:id' element={<PokemonDetails />} />
      <Route
        path='/captured'
        element={
          <ProtectedRoute requireAuth={true}>
            <PokemonsCaptured />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
