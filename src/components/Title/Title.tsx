import { FC } from 'react';

import clsx from 'clsx';

import css from './Title.module.css';

interface TitleProps {
  textTitle: string;
  addClass?: string;
}

const Title: FC<TitleProps> = ({ textTitle, addClass }) => {
  return <h2 className={clsx(css.title, addClass)}>{textTitle}</h2>;
};

export default Title;
