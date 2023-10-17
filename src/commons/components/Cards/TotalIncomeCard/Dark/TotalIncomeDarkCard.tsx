/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';

// Material UI;
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme, styled } from '@mui/material';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// Custom Components
import { MainCard } from '../../../MainCard/MainCard';
import { SkeletonTotalIncomeCard } from '../Skeleton/SkeletonTotalIncomeCard';

// Typescript
import { CardProps } from '../../../../utils/Interfaces/Card.Interface';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

export const TotalIncomeDarkCard: FC<CardProps> = React.memo(({ isLoading }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
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
                    }}
                  >
                    <TableChartOutlinedIcon fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                  }}
                  primary={
                    <Typography variant="h4" sx={{ color: '#fff' }}>
                      $203k
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                      Total Income
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
});
