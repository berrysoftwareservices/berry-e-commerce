import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Custom Components
import { LoadingScreen } from '../../commons/components/LoadingSreen/LoadingScreen';
import { MainContainer } from '../../commons/components/MainContainer/MainContainer';
import { Login } from '../Auth/Login/Login';

interface MainPageProps {
  isLoggedIn: boolean;
  loggedUserData?: object;
  loading: boolean;
}

export const MainPage: FC<MainPageProps> = React.memo(({ isLoggedIn, loading }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <LoadingScreen loading={loading}>
      {isLoggedIn ? <MainContainer /> : <Login intendedRoute={pathname} loadingUserIsLogged={loading} />}
    </LoadingScreen>
  );
});
