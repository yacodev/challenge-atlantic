export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface ButtonsProps {
  onClick: () => void;
  text: string;
  type?: ButtonType;
}
