/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';

// Material UI
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Custom Components
import { MainCard } from '../../MainCard/MainCard';
import { SkeletonEarningCard as SkeletonTotalOrderLineChartCard } from '../EarningCard/Skeleton/SkeletonEarningCard';
import { ChartDataMonth, ChartDataYear } from '../../../../constants';

// Utils
import { CardProps } from '../../../../utils/Interfaces/Card.Interface';

export const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    // @ts-ignore
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}));

export const TotalOrderLineChartCard: FC<CardProps> = ({ isLoading }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  // @ts-ignore
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderLineChartCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        // @ts-ignore
                        ...theme.typography.commonAvatar,
                        // @ts-ignore
                        ...theme.typography.largeAvatar,
                        // @ts-ignore
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? 'contained' : 'text'}
                      size="small"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? 'contained' : 'text'}
                      size="small"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                            $108
                          </Typography>
                        ) : (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                            $961
                          </Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            // @ts-ignore
                            ...theme.typography.smallAvatar,
                            cursor: 'pointer',
                            // @ts-ignore
                            backgroundColor: theme.palette.primary[200],
                            color: theme.palette.primary.dark,
                          }}
                        >
                          <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            // @ts-ignore
                            color: theme.palette.primary[200],
                          }}
                        >
                          Total Order
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};
