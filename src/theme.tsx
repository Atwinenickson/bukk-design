// src/theme.ts

import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';


import { Theme as MuiTheme } from "@mui/material/styles";

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },
  },
});

export default theme;
