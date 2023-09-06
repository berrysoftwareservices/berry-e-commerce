import React, { useState, useEffect } from 'react';

// Material UI
import { Stack } from '@mui/material';

// Custom Components
import { LinearProgressWithLabel } from '../../commons/components/LinearProgressWithLabel/LinearProgressWithLabel';

export const PageInProgress = React.memo(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <LinearProgressWithLabel progress={progress} label="Page in progress" />
    </Stack>
  );
});
