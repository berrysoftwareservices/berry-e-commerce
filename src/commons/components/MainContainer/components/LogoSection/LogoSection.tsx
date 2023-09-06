import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import { ButtonBase } from '@mui/material';

// Custom Components
import { Logo } from '../../../Logo/Logo';

export const LogoSection = React.memo(() => {
  // const defaultId = useSelector((state) => state.customization.defaultId);
  // const dispatch = useDispatch();
  return (
    // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}></ButtonBase>
    <ButtonBase disableRipple onClick={() => {}} component={Link} to="/">
      <Logo />
    </ButtonBase>
  );
});
