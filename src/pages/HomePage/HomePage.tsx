import Header from '../../components/Header/Header';
import css from './HomePage.module.css';

import { IMAGES_HOME } from '../../constants/constants';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.titleWrap}>
        <Header addClass={css.header} isLight={true} />
        <div className={css.textWrap}>
          <h1 className={css.titleText}>
            Take good <span className={css.titleSpan}>care</span> of your pets
          </h1>
          <p className={css.text}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div className={css.imgWrap}>
        <picture>
          <source
            srcSet={`${IMAGES_HOME.tab1x} 1x, ${IMAGES_HOME.tab2x} 2x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${IMAGES_HOME.mob1x} 1x, ${IMAGES_HOME.mob2x} 2x`} />
          <img src={IMAGES_HOME.mob1x} alt="pets" />
        </picture>
      </div>
    </div>
  );
};

export default HomePage;
