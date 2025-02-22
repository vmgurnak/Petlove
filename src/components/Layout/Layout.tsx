import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

import Loader from '../../helpers/Loader/Loader';

import css from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css.layout}>
      <Suspense fallback={<Loader />}>
        <main>{children}</main>
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(157, 222, 255, 0.9)',
            color: '#000',
          },
        }}
      />
    </div>
  );
};

export default Layout;
