// assets
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import BrowseGalleryOutlinedIcon from '@mui/icons-material/BrowseGalleryOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';

export const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: SortByAlphaOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: ColorLensOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: BrowseGalleryOutlinedIcon,
      breadcrumbs: false,
    },
    {
      id: 'icons',
      title: 'Icons',
      type: 'collapse',
      icon: AddToPhotosOutlinedIcon,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          icon: TocOutlinedIcon,
          url: '/icons/tabler-icons',
          breadcrumbs: false,
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          external: true,
          target: '_blank',
          icon: AvTimerOutlinedIcon,
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false,
        },
      ],
    },
  ],
};
