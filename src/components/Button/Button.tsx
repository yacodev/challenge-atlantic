import { ButtonsProps, ButtonType } from './interface';

export const Button = ({
  onClick,
  text,
  type = ButtonType.Primary,
}: ButtonsProps) => {
  const stylesButton =
    type === ButtonType.Primary
      ? 'bg-blue-500 hover:bg-blue-600 '
      : 'bg-red-500 hover:bg-red-600';

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 text-white  rounded-lg ${stylesButton}`}
    >
      {text}
    </button>
  );
};
