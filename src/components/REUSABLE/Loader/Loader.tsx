import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import css from './Loader.module.css';
import { SvgIcon } from '../SvgIcon';
import { ICONS } from '../../../constants/constants';

const Loader: FC = () => {
  const [loadProgress, setloadProgress] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 20);
          return 100;
        }
        return prev + 5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loader}>
      {loadingComplete ? (
        <p className={css.loaderLogo}>
          petl
          <SvgIcon addClass={css.iconHeart} icon={ICONS.heart} />
          ve
        </p>
      ) : (
        <div className={css.loaderCircleWrap}>
          <svg className={css.loaderSvg} viewBox="0 0 100 100">
            <motion.circle
              className={css.progressCircle}
              cx="50"
              cy="50"
              r="45"
              strokeDasharray="282.74"
              strokeDashoffset="282.74"
              initial={{ strokeDashoffset: 282.74 }}
              animate={{
                strokeDashoffset: 282.74 - (loadProgress / 100) * 282.74,
              }}
              transition={{ duration: 0.3, ease: 'linear' }}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className={css.loaderPercentText}>{loadProgress}%</span>
        </div>
      )}
    </div>
  );
};

export default Loader;
