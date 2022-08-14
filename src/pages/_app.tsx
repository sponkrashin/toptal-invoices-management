import '../styles/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppWrapper from 'components/layout/AppWrapper';
import StoreProvider from 'store/StoreProvider';

const theme = createTheme();

const App = (props: AppProps) => (
  <>
    <Head>
      <title>Invoices Management</title>
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <AppWrapper {...props} />
        <div id="modal-root"></div>
      </StoreProvider>
    </ThemeProvider>
  </>
);

export default App;
