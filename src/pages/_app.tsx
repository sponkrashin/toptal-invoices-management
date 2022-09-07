import 'styles/styles.scss';

import { PropsWithChildren, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import AppWrapper from 'components/AppWrapper';
import { initializeAuth } from 'store/authSlice';
import { useDispatch } from 'store/hooks';
import { store } from 'store/rootStore';
import { theme } from 'theme/theme';

const AppStateInitiailizer = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return <>{children}</>;
};

const App = (props: AppProps) => (
  <>
    <Head>
      <title>Invoices Management</title>
    </Head>
    <Provider store={store}>
      <AppStateInitiailizer>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppWrapper {...props} />
          <div id="modal-root"></div>
        </ThemeProvider>
      </AppStateInitiailizer>
    </Provider>
  </>
);

export default App;
