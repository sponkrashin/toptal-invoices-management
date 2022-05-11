import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import ClientsDataTable from 'components/Clients/ClientsDataTable';
import InvoicesDataTable from 'components/Invoices/InvoicesDataTable';
import Title from 'components/UI/Title';
import { MOCK_CLIENTS } from 'store/mock-clients';
import { MOCK_INVOICES } from 'store/mock-invoices';

const ComponentPaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
}));

export default function Dashboard() {
  // Temporarily, just as an example
  const clients = MOCK_CLIENTS.filter((_, i) => i < 2);
  const invoices = MOCK_INVOICES.filter((_, i) => i < 3);

  return (
    <Container>
      <ComponentPaperStyled>
        <Title>Clients</Title>
        <ClientsDataTable
          data={clients}
          onRowClick={(row) => console.log('From dashboard', row)}
        />
      </ComponentPaperStyled>
      <ComponentPaperStyled>
        <Title>Invoices</Title>
        <InvoicesDataTable
          data={invoices}
          onRowClick={(row) => console.log('From dashboard', row)}
        />
      </ComponentPaperStyled>
    </Container>
  );
}
