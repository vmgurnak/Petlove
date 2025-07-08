import clsx from 'clsx';
import { FC } from 'react';

import css from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addClass?: string;
  disabled?: boolean;
  active?: boolean;
  // [key: string]: unknown;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  addClass,
  disabled = false,
  active = false,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, addClass, active && css.active)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
