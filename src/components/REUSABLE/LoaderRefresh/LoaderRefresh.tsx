import { ThreeDots } from 'react-loader-spinner';

import css from './LoaderRefresh.module.css';

const LoaderRefresh = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        visible={true}
        height="50"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p>Refreshing user please wait...</p>
    </div>
  );
};

export default LoaderRefresh;
