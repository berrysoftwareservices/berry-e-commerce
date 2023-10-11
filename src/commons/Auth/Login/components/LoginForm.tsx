import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  //   Checkbox,
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

// project imports
// import useScriptRef from 'hooks/useScriptRef';
// import AnimateButton from 'ui-component/extended/AnimateButton';

import Google from '../../../../assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const schema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Required field'),
  password: yup.string().required('Required field'),
});

interface InputValues {
  email: string;
  password: string;
}

export const LoginForm = React.memo(() => {
  //   const scriptedRef = useScriptRef();
  //   const [checked, setChecked] = useState(true);
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const googleHandler = async () => {
    console.error('Login');
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onShownPassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);

  const { register, handleSubmit, formState, control } = useForm<InputValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { errors } = formState;

  const onSubmit = useCallback((values: InputValues) => {
    console.log(values);
  }, []);

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
            Sign in with Google
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
            <Typography variant="subtitle1">Sign in with Email address</Typography>
          </Box>
        </Grid>
      </Grid>
      <Stack>
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
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
          <Stack direction="row" pt={2} pb={2} justifyContent="flex-end">
            <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              Forgot Password?
            </Typography>
          </Stack>

          <Button variant="contained" fullWidth color="secondary" type="submit" sx={{ paddingTop: 1 }}>
            Sign In
          </Button>
        </form>
      </Stack>
    </Box>
  );
});
