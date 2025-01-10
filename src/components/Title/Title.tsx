import { FC } from 'react';

import css from './Title.module.css';

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};

export default Title;
