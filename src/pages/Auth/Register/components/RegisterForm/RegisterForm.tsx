import React, { FC, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Auth } from 'aws-amplify';
import * as yup from 'yup';

// Material UI
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Services
import { UserService } from '../../../../../commons/services/users.service';

// Typescript
import { userRegisteredType } from '../../../../../commons/utils/Types/User.types';

// assets
import Google from '../../../../../assets/images/icons/social-google.svg';

const schema = yup.object({
  firstName: yup.string().required('Required field'),
  lastName: yup.string().required('Required field'),
  email: yup.string().email('Please enter a valid email').required('Required field'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+-]/, 'Password requires a special character')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Password is a required field'),
});

interface InputValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onRegister: (value: userRegisteredType) => void;
}

export const RegisterForm: FC<RegisterFormProps> = React.memo(({ onRegister }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const onShownPassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);

  const googleHandler = async () => {
    console.error('Login');
  };

  const { register, handleSubmit, formState, control } = useForm<InputValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { errors } = formState;

  const onSubmit = useCallback(
    async (userData: InputValues) => {
      setLoading(true);
      const { email, firstName, lastName, password } = userData;

      try {
        const cognitoResponse = await Auth.signUp(email, password);
        const { userSub } = cognitoResponse;
        const variables = {
          action: 'create_user',
          firstName,
          lastName,
          email,
          userId: userSub,
          confirmStatus: cognitoResponse.userConfirmed,
          tenantId: 'berry-project',
        };
        await UserService.createOrConfirmUser(variables);
        // TODO: Send a notification here
        // const serviceResponse = await UserService.createOrConfirmUser(variables);
        // enqueueSnackbar(`${serviceResponse.message}`, { variant: 'success' });
        onRegister({ id: userSub, email });
      } catch (err) {
        // enqueueSnackbar(`Error!! ${err.message}`, { variant: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [onRegister],
  );

  return (
    <Box>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          {/* <AnimateButton> */}
          <Button
            disableElevation
            fullWidth
            onClick={googleHandler}
            size="large"
            variant="outlined"
            sx={{
              color: 'grey.700',
              backgroundColor: theme.palette.grey[50],
              borderColor: theme.palette.grey[100],
            }}
          >
            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
              <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
            </Box>
            Sign up with Google
          </Button>
          {/* </AnimateButton> */}
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                // borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>
      <Stack>
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
          <Stack pt={2} pb={2}>
            <TextField
              size="small"
              label="First Name"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors?.firstName?.message}
              {...register('firstName')}
            />
            <Typography variant="caption" color="error" pl={1}>
              {errors?.firstName?.message}
            </Typography>
          </Stack>
          <Stack pt={2} pb={2}>
            <TextField
              size="small"
              label="Last Name"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors?.lastName?.message}
              {...register('lastName')}
            />
            <Typography variant="caption" color="error" pl={1}>
              {errors?.lastName?.message}
            </Typography>
          </Stack>
          <Stack pt={2} pb={2}>
            <TextField
              type="email"
              size="small"
              label="Email"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors?.email?.message}
              {...register('email')}
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
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.password?.message}
                  size="small"
                  fullWidth
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
          <Stack pt={2} pb={2}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.confirmPassword?.message}
                  size="small"
                  fullWidth
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
              {errors?.confirmPassword?.message}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            disabled={loading}
            color="secondary"
            type="submit"
            sx={{ paddingTop: 1 }}
          >
            Sign Up
          </Button>
        </form>
      </Stack>
    </Box>
  );
});
