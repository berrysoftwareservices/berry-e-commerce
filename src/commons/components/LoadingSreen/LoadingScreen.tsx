import React, { FC, Children } from 'react';

// Material UI
import { CircularProgress, Typography } from '@mui/material';

// Styles
import SC from './LoadingScreen.styles';

interface LoadingScreenProps {
  loading: boolean;
  message?: string;
  error?: boolean;
  errorMessage?: string;
  children: JSX.Element;
}

export const LoadingScreen: FC<LoadingScreenProps> = React.memo(
  ({ loading, message, error, errorMessage, children }) => {
    if (error) {
      return <SC.Container>{errorMessage && <Typography color="error">{errorMessage}</Typography>}</SC.Container>;
    }

    if (loading) {
      return (
        <SC.Container>
          <CircularProgress />
          {message && <Typography mt={1.5}>{message}</Typography>}
        </SC.Container>
      );
    }

    return Children.only(children);
  },
);
