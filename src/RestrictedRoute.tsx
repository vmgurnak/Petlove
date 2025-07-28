import { useAppSelector } from './redux/hooks';
import { selectIsLogged } from './redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';

interface IRestrictedRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}

const RestrictedRoute: FC<IRestrictedRouteProps> = ({
  component,
  redirectTo = '/profile',
}) => {
  const isLogged = useAppSelector(selectIsLogged);
  return isLogged ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
