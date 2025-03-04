import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';

export const Login = () => {
  const navigate = useNavigate();
  const { name, setName } = useUserStore();

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

        <button
          onClick={handleSubmit}
          className='w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          ingresar
        </button>
      </div>
    </div>
  );
};
