const { createTheme } = require('@mui/material');

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
  },
});

theme.spacingValue = theme.spacing(1);

theme.drawerShowTransition = theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
});

theme.drawerHideTransition = theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
});

module.exports = { theme };
