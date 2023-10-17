import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// Material UI
import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Services
import { UserService } from '../../../../../commons/services/users.service';

// Typescript
import { userRegisteredType } from '../../../../../commons/utils/Types/User.types';

const schema = yup.object({
  confirmationCode: yup.string().required('The confirmation code is required'),
});

interface InputValues {
  confirmationCode: string;
}

interface EmailValidationFormProps {
  userData: userRegisteredType;
}

export const EmailValidationForm: FC<EmailValidationFormProps> = React.memo(({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [invalidCodeMessage, setInvalidCodeMessage] = useState('');
  const navigate = useNavigate();
  const { id, email } = userData;

  const { register, handleSubmit, formState } = useForm<InputValues>({
    defaultValues: {
      confirmationCode: '',
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const { errors } = formState;

  const cleanInvalidCodeMessage = () => setInvalidCodeMessage('');

  const onSubmit = useCallback(
    async (values: InputValues) => {
      setLoading(true);
      const { confirmationCode } = values;

      try {
        const confirmationResponse = await Auth.confirmSignUp(email, confirmationCode);
        const variables = {
          action: 'confirm_user',
          userId: id,
          confirmStatus: confirmationResponse === 'SUCCESS' ? true : confirmationResponse,
        };
        await UserService.createOrConfirmUser(variables);
        // TODO: Send a notification here
        // const serviceResponse = await UserService.createOrConfirmUser(variables);
        // enqueueSnackbar(`${serviceResponse.message}`, { variant: 'success' });
        navigate('/login');
      } catch (err) {
        setInvalidCodeMessage('Invalid code, please try again');
      } finally {
        setLoading(false);
      }
    },
    [email, id, navigate],
  );

  return (
    <Box>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              A verification code was sent to your email. <br /> Check your email and enter the code below.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Stack>
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
          <Stack pt={2} pb={2}>
            <TextField
              size="small"
              label="Confirmation code"
              fullWidth
              disabled={loading}
              InputLabelProps={{ shrink: true }}
              error={!!errors?.confirmationCode?.message}
              {...register('confirmationCode')}
              onFocus={cleanInvalidCodeMessage}
            />
            <Typography variant="caption" color="error" pl={1}>
              {errors?.confirmationCode?.message}
            </Typography>
            {invalidCodeMessage ? (
              <Stack justifyContent="center" direction="row" mt={1}>
                <Typography variant="caption" color="error" pl={1}>
                  Invalid code, please try again
                </Typography>
              </Stack>
            ) : null}
          </Stack>
          <LoadingButton
            variant="contained"
            loading={loading}
            fullWidth
            color="secondary"
            type="submit"
            sx={{ paddingTop: 1 }}
          >
            Confirm Email
          </LoadingButton>
        </form>
      </Stack>
    </Box>
  );
});
