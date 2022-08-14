import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClientsDataTable from 'components/ClientsTable';
import InvoicesDataTable from 'components/InvoicesTable';
import Title from 'components/Title';
import { MOCK_CLIENTS } from 'store/mock-clients';
import { MOCK_INVOICES } from 'store/mock-invoices';

const ComponentPaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
}));

const Dashboard = () => {
  // Temporarily, just as an example
  const clients = MOCK_CLIENTS.filter((_, i) => i < 2);
  const invoices = MOCK_INVOICES.filter((_, i) => i < 3);

  return (
    <>
      <ComponentPaperStyled>
        <Title>Clients</Title>
        <ClientsDataTable data={clients} onRowClick={(row) => console.log('From dashboard', row)} />
      </ComponentPaperStyled>
      <ComponentPaperStyled>
        <Title>Invoices</Title>
        <InvoicesDataTable data={invoices} onRowClick={(row) => console.log('From dashboard', row)} />
      </ComponentPaperStyled>
    </>
  );
};

export default Dashboard;
