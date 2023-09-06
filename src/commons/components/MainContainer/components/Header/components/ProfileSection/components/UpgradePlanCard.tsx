import React from 'react';

// Material UI
import { Button, Card, CardContent, Grid, Stack, Typography, styled } from '@mui/material';

const CardStyle = styled(Card)(({ theme }) => ({
  background: '#ddd0f5',
  marginTop: '16px',
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '19px solid ',
    borderColor: theme.palette.secondary.dark,
    borderRadius: '50%',
    top: '65px',
    right: '-150px',
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '3px solid ',
    borderColor: theme.palette.secondary.dark,
    borderRadius: '50%',
    top: '145px',
    right: '-70px',
  },
}));

export const UpgradePlanCard = React.memo(() => (
  <CardStyle>
    <CardContent>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4">Upgrade your plan</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
            70% discount for 1 years <br />
            subscriptions.
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row">
            <Button variant="contained" color="secondary" sx={{ boxShadow: 'none' }}>
              Go Premium
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </CardStyle>
));
