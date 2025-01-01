import { FC } from 'react';

interface SvgIconProps {
  addClass?: string;
  icon: string;
}

export const SvgIcon: FC<SvgIconProps> = ({ addClass, icon }): JSX.Element => {
  return (
    <svg className={addClass}>
      <use href={icon}></use>
    </svg>
  );
};
