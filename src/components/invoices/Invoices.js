import { MOCK_INVOICES } from 'store/mock-invoices';
import InvoicesDataTable from './InvoicesDataTable';

export default function Invoices() {
  return (
    <InvoicesDataTable
      data={MOCK_INVOICES}
      onRowClick={(row) => console.log('From invoices page', row)}
      enableFiltering={true}
      enableSorting={true}
      enablePagination={true}
    />
  );
}
