import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import { Logo } from '../../../Logo/Logo';

export const LogoSection = () => {
  // const defaultId = useSelector((state) => state.customization.defaultId);
  // const dispatch = useDispatch();
  return (
    // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}></ButtonBase>
    <ButtonBase disableRipple onClick={() => {}} component={Link} to="/">
      <Logo />
    </ButtonBase>
  );
};
