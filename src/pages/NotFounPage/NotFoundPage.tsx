import { FC } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

import css from './NotFoundPage.module.css';

import { IMAGES_NOTFOUND } from '../../constants/constants';

const NotFoundPage: FC = (): React.ReactElement => {
  return (
    <div className={css.notFoundPage}>
      <Header addClass={css.header} />
      <div className={css.notFoundPageWrap}>
        <div className={css.notFoundPageCont}>
          <p className={css.title}>
            <span>4</span>
            <div className={css.imgWrap}>
              <picture>
                <source
                  srcSet={`${IMAGES_NOTFOUND.tab1x} 1x, ${IMAGES_NOTFOUND.tab2x} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${IMAGES_NOTFOUND.tab1x} 1x, ${IMAGES_NOTFOUND.tab2x} 2x`}
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={`${IMAGES_NOTFOUND.mob1x} 1x, ${IMAGES_NOTFOUND.mob2x} 2x`}
                />
                <img src={IMAGES_NOTFOUND.mob1x} alt="Not Found Image" />
              </picture>
            </div>
            <span>4</span>
          </p>
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
