import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';
import { Button } from '../components';
import { ButtonType } from '../components/Button/interface';
import { useEffect } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const { name, setName } = useUserStore();

  useEffect(() => {
    setName('');
  }, []);

  const handleSubmit = () => {
    navigate('/pokemons');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-80 p-6 bg-white  rounded-lg shadow-lg'>
        <div className='mb-6'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
            alt='pokemons'
            className='w-full rounded-lg'
          />
        </div>

        <input
          type='text'
          placeholder='usuario'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full mb-4 p-2 border border-gray-300  rounded-md bg-white  text-gray-900 '
        />
        <div className='flex justify-center'>
          <Button
            text='ingresar'
            onClick={handleSubmit}
            type={ButtonType.Secondary}
          />
        </div>
      </div>
    </div>
  );
};
