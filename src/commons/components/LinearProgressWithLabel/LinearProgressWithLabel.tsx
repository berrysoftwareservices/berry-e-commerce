import React, { FC } from 'react';

// Material UI
import { LinearProgress, Typography, Stack } from '@mui/material';

interface LinearProgressProps {
  progress: number;
  label: string;
}

export const LinearProgressWithLabel: FC<LinearProgressProps> = React.memo(({ progress, label }) => {
  return (
    <Stack spacing={1}>
      <Stack sx={{ minWidth: 35 }}>
        <Typography variant="body2">{label}</Typography>
      </Stack>
      <Stack>
        <LinearProgress variant="determinate" value={progress} />
      </Stack>
    </Stack>
  );
});
