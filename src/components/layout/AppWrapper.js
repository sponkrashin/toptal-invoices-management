import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import HeaderWithSidebarContainer from 'components/layout/HeaderWithSidebarContainer';

const WrapperStyled = (props) => (
  <Box sx={{ display: 'flex' }} {...props}></Box>
);

const MainStyled = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    }}
    {...props}
  ></Box>
);

const ContentStyled = (props) => (
  <Container sx={{ mt: 4, mb: 4 }} {...props}></Container>
);

export default function AppWrapper({ Component, pageProps }) {
  return (
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
}
