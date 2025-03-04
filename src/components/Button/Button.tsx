import { ButtonsProps } from './interface';

export const Button = ({ onClick, text }: ButtonsProps) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 bg-blue-500 hover:bg-blue-600 
                             text-white  rounded-lg
                             flex items-center '
    >
      {text}
    </button>
  );
};
