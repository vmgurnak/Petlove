import Header from '../../components/Header/Header';
import css from './HomePage.module.css';

import homeImgMob from '../../assets/home-page/home-img-mob1x.jpg';
import homeImgMob2x from '../../assets/home-page/home-img-mob2x.jpg';

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
        {/* <picture> */}
        {/* <source srcSet={homeImgMob} type="image/jpeg" sizes="335px, 100vw" /> */}
        {/* <source
            media="(max-width: 767px)"
            srcSet={homeImgMob}
            type="image/jpeg"
            sizes="(max-width: 767px) 335px, 100vw"
          /> */}
        {/* <source
            media="(max-width: 767px)"
            srcSet={homeImgMob2x}
            type="image/jpeg"
          /> */}
        {/* <img srcSet="{homeImgMob} 1x, {homeImgMob2x} 2x" alt="pets" /> */}
        {/* </picture> */}
        <img className={css.img} src={homeImgMob} alt="pets" />
      </div>
    </div>
  );
};

export default HomePage;
