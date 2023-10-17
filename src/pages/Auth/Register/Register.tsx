import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// Custom Components
import { AuthCardWrapper } from '../../../commons/components/Cards/AuthCardWrapper/AuthCardWrapper';
import { EmailValidationForm } from './components/EmailValidationForm/EmailValidationForm';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import { AuthFooter } from '../components/AuthFooter/AuthFooter';
import { Logo } from '../../../commons/components/Logo/Logo';

export const Register = React.memo(() => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [userCreatedInfo, setUserCreatedInfo] = useState({ id: '', email: '' });
  const pendingEmailValidation = useMemo(() => userCreatedInfo.id !== '', [userCreatedInfo]);

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 1 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  {pendingEmailValidation ? (
                    <Grid item xs={12}>
                      <EmailValidationForm userData={userCreatedInfo} />
                    </Grid>
                  ) : (
                    <>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction={matchDownSM ? 'column-reverse' : 'row'}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Grid item>
                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                              <Typography
                                color={theme.palette.secondary.main}
                                gutterBottom
                                variant={matchDownSM ? 'h3' : 'h2'}
                              >
                                Sign up
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <RegisterForm onRegister={setUserCreatedInfo} />
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Stack>
  );
});
