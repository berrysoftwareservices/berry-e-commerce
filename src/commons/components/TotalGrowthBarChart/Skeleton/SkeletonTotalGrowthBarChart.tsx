import React from 'react';

// Material UI
import { Card, CardContent, Grid, Skeleton } from '@mui/material';

// Constants
import { gridSpacing } from '../../../constants';

export const SkeletonTotalGrowthBarChart = React.memo(() => (
  <Card>
    <CardContent>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Skeleton variant="text" />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" height={20} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Skeleton variant="rectangular" height={50} width={80} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={530} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
));
