// assets
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: VpnKeyOutlinedIcon,
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          icon: LockOpenOutlinedIcon,
          url: '/login',
          target: true,
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          icon: ManageAccountsIcon,
          url: '/register',
          target: true,
        },
      ],
    },
  ],
};
