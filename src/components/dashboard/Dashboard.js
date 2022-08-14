import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ClientsDataTable from 'components/clients/ClientsDataTable';
import InvoicesDataTable from 'components/invoices/InvoicesDataTable';
import Title from 'components/ui/Title';
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
    <Fragment>
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
    </Fragment>
  );
}
