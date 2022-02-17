import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: '#f44336',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
