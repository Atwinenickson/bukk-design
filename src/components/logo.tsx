import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { Toolbar, IconButton, Typography} from '@mui/material';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export const Logo = styled((props: any) => {
  const { variant, onSidebarOpen, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (

    <Toolbar>
      {/* <Typography>Change Me</Typography> */}
        
      <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <DoubleArrowIcon fontSize="small" />
          </IconButton>
    </Toolbar>
  );
})``;

// Logo.defaultProps = {
//   variant: 'primary'
// };

// Logo.propTypes = {
//   variant: PropTypes.oneOf(['light', 'primary'])
// };