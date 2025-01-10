import { Suspense } from 'react';

// import Header from '../Header/Header';
import Loader from '../../helpers/Loader/Loader';

import css from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css.layout}>
      <Suspense fallback={<Loader />}>
        {/* <Header /> */}
        <main>{children}</main>
      </Suspense>
    </div>
  );
};

export default Layout;
