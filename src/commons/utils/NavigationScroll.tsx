import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationScrollProps {
  children?: React.ReactNode;
}

export const NavigationScroll: FC<NavigationScrollProps> = React.memo(({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children || null;
});
