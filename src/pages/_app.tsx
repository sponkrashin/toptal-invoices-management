import 'styles/styles.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import AppWrapper from 'components/AppWrapper';
import { store } from 'store/rootStore';
import { theme } from 'theme/theme';

const App = (props: AppProps) => (
  <>
    <Head>
      <title>Invoices Management</title>
    </Head>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper {...props} />
        <div id="modal-root"></div>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
