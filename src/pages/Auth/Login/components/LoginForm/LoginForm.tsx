import React, { FC, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// Material UI
import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoadingButton from '@mui/lab/LoadingButton';

// Custom Components
import { LoadingScreen } from '../../../../../commons/components/LoadingSreen/LoadingScreen';

// Custom Hooks
import { useAuthentication } from '../../../../../commons/hooks/useAuthentication.hook';

// Services
import { UserService } from '../../../../../commons/services/users.service';

// Typescript
import { LoginProps } from '../../../../../commons/utils/Interfaces/Auth.Interface';

const schema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Required field'),
  password: yup.string().required('Required field'),
});

interface InputValues {
  email: string;
  password: string;
}

export const LoginForm: FC<LoginProps> = React.memo(({ intendedRoute, loadingUserIsLogged }) => {
  const { setLoggedUserData } = useAuthentication();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShownPassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);
  const cleanLoginError = () => setLoginError(false);

  const { register, handleSubmit, formState, control } = useForm<InputValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const { errors } = formState;

  const onSubmit = useCallback(
    async (values: InputValues) => {
      setLoading(true);
      const { email, password } = values;
      try {
        const response = await Auth.signIn(email, password);

        const variables = {
          id: response.username,
        };

        const userLoggedData = await UserService.getLoggedUser(variables);

        const { userData } = userLoggedData;
        setLoggedUserData(userData);

        if (intendedRoute) {
          navigate(intendedRoute);
        } else {
          navigate('/');
        }
      } catch (err) {
        setLoginError(true);
        setLoading(false);
      }
    },
    [intendedRoute, setLoggedUserData, navigate],
  );

  return (
    <Box>
      <LoadingScreen loading={loadingUserIsLogged}>
        <>
          <Stack>
            <form onSubmit={handleSubmit((values) => onSubmit(values))}>
              <Stack pt={2} pb={2}>
                <TextField
                  type="email"
                  size="small"
                  label="Email"
                  disabled={loading}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.email?.message}
                  {...register('email')}
                  onFocus={cleanLoginError}
                />
                <Typography variant="caption" color="error" pl={1}>
                  {errors?.email?.message}
                </Typography>
              </Stack>

              <Stack pt={2} pb={2}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      disabled={loading}
                      InputLabelProps={{ shrink: true }}
                      error={!!errors?.password?.message}
                      size="small"
                      fullWidth
                      onFocus={cleanLoginError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={onShownPassword}
                              // onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Typography variant="caption" color="error" pl={1}>
                  {errors?.password?.message}
                </Typography>
              </Stack>
              {loginError ? (
                <Stack justifyContent="center" direction="row">
                  <Typography variant="caption" color="error" pl={1}>
                    Email or password is incorrect, please try again
                  </Typography>
                </Stack>
              ) : null}
              <Stack direction="row" pb={2} justifyContent="flex-end">
                <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                  Forgot Password?
                </Typography>
              </Stack>

              <LoadingButton
                variant="contained"
                loading={loading}
                fullWidth
                color="secondary"
                type="submit"
                sx={{ paddingTop: 1 }}
              >
                Sign In
              </LoadingButton>
            </form>
          </Stack>
        </>
      </LoadingScreen>
    </Box>
  );
});
