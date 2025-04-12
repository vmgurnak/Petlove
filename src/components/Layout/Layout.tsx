import { Toaster } from 'react-hot-toast';
import { FC, Suspense } from 'react';

import { useAppSelector } from '../../../src/redux/hooks.ts';
import Modal from '../Modal/Modal.tsx';
import Loader from '../REUSABLE/Loader/Loader.tsx';
import { selectModalIsOpen } from '../../../src/redux/modal/selecrots.ts';

import css from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  loadProgress?: number;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const modalIsOpen = useAppSelector(selectModalIsOpen);

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
      {modalIsOpen && <Modal />}
    </div>
  );
};

export default Layout;
