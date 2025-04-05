import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// import { RotatingLines } from 'react-loader-spinner';

import css from './Loader.module.css';
import { SvgIcon } from '../SvgIcon';
import { ICONS } from '../../../constants/constants';

const Loader: FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loader}>
      {loadingComplete ? (
        <p className={css.loaderText}>
          petl
          <SvgIcon addClass={css.icon} icon={ICONS.heart} />
          ve
        </p>
      ) : (
        <>
          <p className={css.loaderProgress}>{progress}%</p>
          {/* <svg width="292" height="292" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#4fa94d"
              strokeWidth="5"
              fill="none"
              strokeDasharray="282.74"
              strokeDashoffset="282.74"
              initial={{ strokeDashoffset: 282.74 }}
              animate={{ strokeDashoffset: 282.74 - (progress / 100) * 282.74 }}
              transition={{ duration: 0.3, ease: 'linear' }}
            />
          </svg> */}
        </>
        // <svg width="292" height="292" viewBox="0 0 100 100">
        //   {/* <circle
        //     cx="50"
        //     cy="50"
        //     r="45"
        //     stroke="#ddd"
        //     strokeWidth="5"
        //     fill="none"
        //   /> */}
        //   <motion.circle
        //     cx="50"
        //     cy="50"
        //     r="45"
        //     stroke="#4fa94d"
        //     strokeWidth="5"
        //     fill="none"
        //     strokeDasharray="282.74"
        //     strokeDashoffset="282.74"
        //     initial={{ strokeDashoffset: 282.74 }}
        //     animate={{ strokeDashoffset: 282.74 - (progress / 100) * 282.74 }}
        //     transition={{ duration: 0.3, ease: 'linear' }}
        //   />
        //   <text x="50" y="55" textAnchor="middle" fontSize="20px" fill="#333">
        //     {progress}%
        //   </text>
        // </svg>
      )}
    </div>
  );
};

export default Loader;
