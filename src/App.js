import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';

import HeaderWithSidebarContainer from './components/layout/HeaderWithSidebarContainer';
import Dashboard from './components/dashboard/Dashboard';
import Clients from 'components/clients/Clients';
import Invoices from 'components/invoices/Invoices';
import NotFound from 'components/exceptions/NotFound';
import SignUp from 'components/auth/SignUp';

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

export default function App() {
  return (
    <WrapperStyled>
      <HeaderWithSidebarContainer />
      <MainStyled component="main">
        <Toolbar />
        <ContentStyled maxWidth="lg">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentStyled>
      </MainStyled>
    </WrapperStyled>
  );
}
