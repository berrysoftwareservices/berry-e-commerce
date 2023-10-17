import { useState, useEffect, useCallback } from 'react';
import { useReactiveVar, makeVar } from '@apollo/client';
import { Auth } from 'aws-amplify';
import { useLocation } from 'react-router-dom';

// Utils
import { clearPersistedSettings } from '../components/MainContainer/utils';

// Constants
import { LOCAL_STORAGE } from '../constants/localstorage.constants';

// Typescript
import { userDataType } from '../utils/Types/User.types';

const isLoggedInVar = makeVar(false);
const loggedUserDataVar = makeVar(JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_LOGGED) || '{}'));

export const useAuthentication = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const loggedUserData = useReactiveVar(loggedUserDataVar);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(() => {
        setLoading(false);
        isLoggedInVar(true);
      })
      .catch(() => {
        setLoading(false);
        isLoggedInVar(false);
      });
  }, [pathname, loggedUserData]);

  const setLoggedUser = useCallback((userData: userDataType) => {
    loggedUserDataVar(userData);

    const lastUserLogged = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_LOGGED) || '{}');
    if (lastUserLogged.id !== userData.id) {
      clearPersistedSettings();
    }
    localStorage.setItem(LOCAL_STORAGE.USER_LOGGED, JSON.stringify(userData));
  }, []);

  const setLoggedUserData = (userData: userDataType) => {
    isLoggedInVar(true);
    setLoggedUser(userData);
  };

  const removeLoggedUserData = () => {
    isLoggedInVar(false);
    localStorage.removeItem(LOCAL_STORAGE.USER_LOGGED);
  };

  return {
    loggedUserData,
    setLoggedUser,
    isLoggedIn,
    loading,
    setLoggedUserData,
    removeLoggedUserData,
  };
};
