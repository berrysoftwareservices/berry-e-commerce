/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

// Material UI
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';

// import { MENU_OPEN, SET_MENU } from 'store/actions';

// Stores
import { useGeneralCustomizationStore } from '../../../../../../../../stores/useGeneralCustomizationStore';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Typescript
import { Item } from '../../../../../../../utils/Types/Sidebar.types';

interface NavItemProps {
  item: Item;
  level: number;
}

export const NavItem: FC<NavItemProps> = React.memo(({ item, level }) => {
  // const theme = useTheme();
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const customization = useSelector((state) => state.customization);
  // const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const theme = useTheme();

  const { borderRadius } = useGeneralCustomizationStore(
    (state) => ({
      borderRadius: state.borderRadius,
    }),
    shallow,
  );

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    // @ts-ignore
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      // sx={{
      //   width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
      //   height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
      // }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const listItemProps = {
    // component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
    // @ts-ignore
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  // if (item?.external) {
  //   listItemProps = { component: 'a', href: item.url, target: itemTarget };
  // }

  // const itemHandler = (id) => {
  //   dispatch({ type: MENU_OPEN, id });
  //   if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  // };

  // active menu item on page load
  // useEffect(() => {
  //   const currentIndex = document.location.pathname
  //     .toString()
  //     .split('/')
  //     .findIndex((id) => id === item.id);
  //   if (currentIndex > -1) {
  //     dispatch({ type: MENU_OPEN, id: item.id });
  //   }
  //   // eslint-disable-next-line
  // }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: borderRadius,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      // selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      // onClick={() => itemHandler(item.id)}
      onClick={() => {}}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            // variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            // @ts-ignore
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
});
