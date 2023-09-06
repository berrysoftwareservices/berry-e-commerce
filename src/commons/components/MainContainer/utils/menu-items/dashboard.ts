// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

export const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};
