import PropTypes from 'prop-types';
import DataTable, { DataTableColumn, DataTableRow } from 'components/DataTable';
import { Invoice } from 'data/invoice';

const columns: DataTableColumn[] = [
  {
    title: 'Date',
    getValue: ({ date }: Invoice) => date.toLocaleDateString(),
  },
  {
    title: 'Number',
    field: 'invoiceNumber',
  },
  {
    title: 'Client',
    getValue: ({
      client: {
        companyDetails: { name },
      },
    }: Invoice) => name,
  },
  {
    title: 'Amount',
    getValue: ({ value }: Invoice) => `$${value}`,
    align: 'right',
  },
];

export interface InvoicesDataTableProps {
  data: Invoice[];
  enableFiltering?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  onRowClick?: (row: DataTableRow) => void;
}

const InvoicesDataTable = ({
  data,
  onRowClick,
  enableFiltering,
  enableSorting,
  enablePagination,
}: InvoicesDataTableProps) => {
  // Temporarily, just as a placeholder for future changes
  // console.log(`Filtering enabled: ${enableFiltering || false}`);
  // console.log(`Sorting enabled: ${enableSorting || false}`);
  // console.log(`Pagination enabled: ${enablePagination || false}`);

  const handleRowClick = (row: DataTableRow) => onRowClick?.(row);

  return <DataTable columns={columns} rows={data.map((d) => ({ ...d, key: d.id }))} onRowClick={handleRowClick} />;
};

InvoicesDataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    })
  ),
  enableFiltering: PropTypes.bool,
  enablePagination: PropTypes.bool,
  enableSorting: PropTypes.bool,
  onRowClick: PropTypes.func,
};

export default InvoicesDataTable;
