import PropTypes from 'prop-types';
import DataTable, { DataTableColumn, DataTableRow } from 'components/ui/DataTable';

const columns: DataTableColumn[] = [
  {
    title: 'Date',
    field: 'date',
  },
  {
    title: 'Number',
    field: 'number',
  },
  {
    title: 'Client',
    field: 'client',
  },
  {
    title: 'Amount',
    getValue: ({ amount }: { amount: number }) => `$${amount}`,
    align: 'right',
  },
];

export interface InvoicesDataTableProps {
  data: DataTableRow[];
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
  console.log(`Filtering enabled: ${enableFiltering || false}`);
  console.log(`Sorting enabled: ${enableSorting || false}`);
  console.log(`Pagination enabled: ${enablePagination || false}`);

  const handleRowClick = (row: DataTableRow) => onRowClick?.(row);

  return <DataTable columns={columns} rows={data} onRowClick={handleRowClick} />;
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
