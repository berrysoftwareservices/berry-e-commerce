/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// Material UI
import { Grid, MenuItem, TextField, Typography, useTheme } from '@mui/material';

// Custom Components
import { MainCard } from '../MainCard/MainCard';
import { SkeletonTotalGrowthBarChart } from './Skeleton/SkeletonTotalGrowthBarChart';

// Utils
import { CardProps } from '../../../utils/Interfaces/Card.Interface';

// Constants
import { ChartDataBar, gridSpacing } from '../../../constants';

const status = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
];

export const TotalGrowthBarChart: FC<CardProps> = React.memo(({ isLoading }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();

  const { primary } = theme.palette.text;
  // @ts-ignore
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];
  // @ts-ignore
  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  useEffect(() => {
    const newChartData = {
      ...ChartDataBar.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: 'light',
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    };

    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...ChartDataBar} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
});
