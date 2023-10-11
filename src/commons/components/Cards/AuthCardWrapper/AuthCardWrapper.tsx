import { FC } from 'react';

// material-ui
import { Box } from '@mui/material';
import { MainCard } from '../../MainCard/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

interface AuthCardProps {
  children?: JSX.Element;
}
export const AuthCardWrapper: FC<AuthCardProps> = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
);
