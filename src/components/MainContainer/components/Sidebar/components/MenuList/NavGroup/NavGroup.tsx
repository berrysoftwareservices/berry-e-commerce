import { FC } from 'react';

// Material UI
// import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// Custom Components
import { NavCollapse } from '../NavCollapse/NavCollapse';
import { NavItem } from '../NavItem/NavItem';

interface NavGroupProps {
  item: {
    id: string;
    title?: string;
    caption?: string;
    type?: string;
    url?: string;
    icon?: JSX.Element;
    breadcrumbs?: boolean;
    children?: NavGroupProps[];
  };
}

export const NavGroup: FC<NavGroupProps> = ({ item }) => {
  // const theme = useTheme();

  // menu list collapse & items
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = item?.children?.map((menu: any) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            // <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
            <Typography variant="caption" display="block" gutterBottom>
              {item.title}
              {item.caption && (
                // <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                <Typography variant="caption" display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};
