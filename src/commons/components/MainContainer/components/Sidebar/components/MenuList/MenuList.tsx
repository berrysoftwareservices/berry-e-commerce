/* eslint-disable @typescript-eslint/ban-ts-comment */
// Material UI
import { Typography } from '@mui/material';

// Custom Components
import { menuItems } from '../../../../utils/menu-items';
import { NavGroup } from './NavGroup/NavGroup';

export const MenuList = () => {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        // @ts-ignore
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};
