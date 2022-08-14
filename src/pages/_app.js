import '../styles/styles.css';

import React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppWrapper from 'components/layout/AppWrapper';
import ContextsProvider from 'store/ContextsProvider';

const theme = createTheme();

export default function CustomApp(props) {
  return (
    <React.StrictMode>
      <Head>
        <title>Invoices Management</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ContextsProvider>
            <AppWrapper {...props} />
            <div id="modal-root"></div>
          </ContextsProvider>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
}
