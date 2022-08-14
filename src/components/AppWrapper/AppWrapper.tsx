import { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';
import { Box, Container, Toolbar } from '@mui/material';
import HeaderWithSidebarContainer from 'components/HeaderWithSidebarContainer';

const WrapperStyled = (props: PropsWithChildren<{}>) => <Box sx={{ display: 'flex' }} {...props} />;

const MainStyled = (props: PropsWithChildren<any>) => (
  <Box
    sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    }}
    {...props}
  />
);

const ContentStyled = (props: PropsWithChildren<any>) => <Container sx={{ mt: 4, mb: 4 }} {...props} />;

const AppWrapper = ({ Component, pageProps }: AppProps) => (
  <WrapperStyled>
    <HeaderWithSidebarContainer />
    <MainStyled component="main">
      <Toolbar />
      <ContentStyled maxWidth="lg">
        <Component {...pageProps} />
      </ContentStyled>
    </MainStyled>
  </WrapperStyled>
);

export default AppWrapper;
