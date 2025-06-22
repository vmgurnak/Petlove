import { FC } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

import css from './NotFoundPage.module.css';

const NotFoundPage: FC = () => {
  return (
    <div className={css.notFoundPage}>
      <Header addClass={css.header} />
      <div className={css.notFoundPageWrap}>
        <div className={css.notFoundPageCont}>
          <p className={css.title}>404</p>
          <p className={css.text}>Ooops! This page not found :(</p>
          <Link className={css.link} to="/">
            To home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
