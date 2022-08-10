import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { AppBar, Toolbar, Box } from '@mui/material';


export const Logo = styled((props: any) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (

    <AppBar position="static">
    <Toolbar>
      GETBUBB
        
    </Toolbar>
</AppBar>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};