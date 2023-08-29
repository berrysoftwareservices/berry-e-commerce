import { forwardRef, FC } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

interface SubCardProps {
  children?: JSX.Element;
  content?: boolean;
  contentClass?: string;
  darkTitle?: boolean;
  secondary?: JSX.Element | string | object;
  sx?: object;
  contentSX?: object;
  title: string;
}

export const SubCard: FC<SubCardProps> = forwardRef(
  ({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
    const theme = useTheme();
    console.log(ref);
    console.log(secondary);
    return (
      <Card
        //   ref={ref}
        sx={{
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
          },
          ...sx,
        }}
        {...others}
      >
        {/* card header and action */}
        {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} />}
        {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} />}

        {/* content & header divider */}
        {title ? (
          <Divider
            sx={{
              opacity: 1,
              borderColor: theme.palette.primary.light,
            }}
          />
        ) : null}

        {/* card content */}
        {content ? (
          <CardContent sx={{ padding: 1.5, ...contentSX }} className={contentClass || ''}>
            {children}
          </CardContent>
        ) : (
          children
        )}
      </Card>
    );
  },
);
