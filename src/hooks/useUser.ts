import { useUserStore } from '../store';

export const useUser = () => {
  const { name } = useUserStore();
  const userLogged = name !== '';

  return { userLogged, name };
};
