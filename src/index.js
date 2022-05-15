import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import ContextsProvider from 'store/ContextsProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app-root'));

const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
          <ContextsProvider>
            <App />
          </ContextsProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
