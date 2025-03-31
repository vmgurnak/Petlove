import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// import { RotatingLines } from 'react-loader-spinner';

import css from './Loader.module.css';

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
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loader}>
      {/* <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className={css.loaderText}>Loading...</p> */}
      {loadingComplete ? (
        // <motion.img
        //   src="/logo.png"
        //   alt="Logo"
        //   className="w-32 h-32"
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.5 }}
        // />

        <p>Loading complete</p>
      ) : (
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ddd"
            strokeWidth="5"
            fill="none"
          />

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

          <text x="50" y="55" textAnchor="middle" fontSize="20px" fill="#333">
            {progress}%
          </text>
        </svg>
      )}
    </div>
  );
};

export default Loader;
