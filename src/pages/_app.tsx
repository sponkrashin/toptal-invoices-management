import '../styles/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppWrapper from 'components/AppWrapper';
import StoreProvider from 'store/StoreProvider';
import { theme } from 'theme/theme';

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
