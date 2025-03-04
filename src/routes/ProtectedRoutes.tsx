import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth: boolean;
}

export const ProtectedRoute = ({
  children,
  requireAuth,
}: ProtectedRouteProps) => {
  const { userLogged } = useUser();

  if (requireAuth && !userLogged) {
    return <Navigate to='/' replace />;
  }

  if (!requireAuth && userLogged) {
    return <Navigate to='/pokemons' replace />;
  }

  return <>{children}</>;
};
