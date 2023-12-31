/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';

// Material UI
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme, styled } from '@mui/material';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// Custom Components
import { MainCard } from '../../../MainCard/MainCard';
import { SkeletonTotalIncomeCard } from '../Skeleton/SkeletonTotalIncomeCard';

// Typescript
import { CardProps } from '../../../../utils/Interfaces/Card.Interface';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

export const TotalIncomeLightCard: FC<CardProps> = React.memo(({ isLoading }) => {
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
                      backgroundColor: theme.palette.warning.light,
                      color: theme.palette.warning.dark,
                    }}
                  >
                    <StorefrontTwoToneIcon fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                  }}
                  primary={<Typography variant="h4">$203k</Typography>}
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 0.5,
                      }}
                    >
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
