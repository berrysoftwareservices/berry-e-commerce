type Chip = {
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant: 'filled' | 'outlined';
  size: 'small' | 'medium';
  label: string;
  avatar: JSX.Element;
};

export type Item = {
  id: string;
  title?: string;
  target?: string;
  external?: string;
  caption?: string;
  type?: string;
  url?: string;
  icon?: JSX.Element;
  breadcrumbs?: boolean;
  chip?: Chip;
  disabled: boolean;
  children?: Item[];
};
