/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

// Material UI
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// Constants
import { ChartDataArea } from '../../../../constants';

export const BajajAreaChartCard = () => {
  const theme = useTheme();

  // @ts-ignore
  const orangeDark = theme.palette.secondary[800];

  useEffect(() => {
    const newSupportChart = {
      ...ChartDataArea.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light',
      },
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [orangeDark]);

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      <Chart {...ChartDataArea} />
    </Card>
  );
};
