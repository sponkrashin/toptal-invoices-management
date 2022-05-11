import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CssBaseline>
  </ThemeProvider>
);
