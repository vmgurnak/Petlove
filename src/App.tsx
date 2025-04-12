import toast from 'react-hot-toast';
import { Route, Routes } from 'react-router';
import { lazy, useEffect } from 'react';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layout/Layout';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { apiRefreshUser } from '../src/redux/auth/operations';
import { selectIsRefreshing } from '../src/redux/auth/slice';
import LoaderRefresh from './components/REUSABLE/LoaderRefresh/LoaderRefresh';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const FriendsPage = lazy(() => import('./pages/FriendsPage/FriendsPage'));
const RegistrationPage = lazy(
  () => import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser())
      .unwrap()
      .then(() => {
        toast('Login successful');
      })
      .catch((error) => toast.error(error.response.data.message));
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderRefresh />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute component={<ProfilePage />} />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
