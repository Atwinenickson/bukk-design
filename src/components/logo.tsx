import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { Toolbar, IconButton, Typography, Box} from '@mui/material';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export const Logo = styled((props: any) => {
  const { variant, onSidebarOpen, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (

        <Box>
        <Typography>Change Me</Typography>
        </Box>
  );
})``;

// Logo.defaultProps = {
//   variant: 'primary'
// };

// Logo.propTypes = {
//   variant: PropTypes.oneOf(['light', 'primary'])
// };



