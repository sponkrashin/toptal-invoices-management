import { AppProps } from 'next/app';
import { Box, Container, Toolbar } from '@mui/material';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './AppWrapper.module.scss';

const AppWrapper = ({ Component, pageProps }: AppProps) => (
  <Box className={styles.wrapper}>
    <Header />
    <Sidebar />
    <Box className={styles.mainContainer} component="main">
      <Toolbar />
      <Container className={styles.content} maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </Box>
  </Box>
);

export default AppWrapper;
