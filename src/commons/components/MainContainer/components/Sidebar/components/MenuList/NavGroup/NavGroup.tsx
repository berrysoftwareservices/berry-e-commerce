/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';

// Material UI
import { Divider, List, Typography, useTheme } from '@mui/material';

// Custom Components
import { NavCollapse } from '../NavCollapse/NavCollapse';
import { NavItem } from '../NavItem/NavItem';

// Typescript
import { Item } from '../../../../../../../utils/Types/Sidebar.types';

interface NavGroupProps {
  item: Item;
}

export const NavGroup: FC<NavGroupProps> = React.memo(({ item }) => {
  const theme = useTheme();

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
            // @ts-ignore
            <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                // @ts-ignore
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
});
