import { useAppSelector } from './redux/hooks';
import { selectIsLogged } from './redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';

interface IPrivateRouteProps {
  component: JSX.Element;
  redirectTo?: string;
}
const PrivateRoute: FC<IPrivateRouteProps> = ({
  component,
  redirectTo = '/login',
}) => {
  const isLogged = useAppSelector(selectIsLogged);
  return isLogged ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
