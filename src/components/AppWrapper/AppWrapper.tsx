import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Box, Container, Toolbar } from '@mui/material';
import HeaderWithSidebarContainer from 'components/HeaderWithSidebarContainer';
import { initializeAuth } from 'store/authSlice';
import { useDispatch } from 'store/hooks';
import styles from './AppWrapper.module.scss';

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <Box className={styles.wrapper}>
      <HeaderWithSidebarContainer />
      <Box className={styles.mainContainer} component="main">
        <Toolbar />
        <Container className={styles.content} maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </Box>
    </Box>
  );
};

export default AppWrapper;
