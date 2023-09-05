/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forwardRef, FC } from 'react';

// Material UI
// import { useTheme } from '@mui/material/styles';
// import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';

// constant
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 },
};

interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children?: JSX.Element;
  content?: boolean;
  contentClass?: string;
  contentSX?: object;
  darkTitle?: boolean;
  secondary?: JSX.Element;
  shadow?: string;
  sx?: object;
  title?: string;
}

export const MainCard: FC<MainCardProps> = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref,
  ) => {
    console.log(ref);
    const theme = useTheme();
    return (
      <Card
        //ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          // @ts-ignore
          borderColor: theme.palette.primary[200] + 25,
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit',
          },
          ...sx,
        }}
      >
        {title && (
          <CardHeader
            sx={headerSX}
            title={darkTitle ? <Typography variant="h3">{title}</Typography> : <Typography>{title}</Typography>}
            action={secondary}
          />
        )}

        {title && <Divider />}

        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  },
);
