import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import DataTable, { DataTableColumn, DataTableRow } from 'components/ui/DataTable';
import { preventDefault } from 'utils/utils';

const columns: DataTableColumn[] = [
  {
    title: 'Client Name',
    field: 'clientName',
  },
  {
    title: 'Contact',
    field: 'contactName',
  },
  {
    title: 'Contact Email',
    getValue: ({ contactEmail }: { contactEmail: string }) => (
      <Link href={`mailto:${contactEmail}`} onClick={preventDefault}>
        {contactEmail}
      </Link>
    ),
  },
];

export interface ClientsDataTableProps {
  data: DataTableRow[];
  enableFiltering?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  onRowClick?: (row: DataTableRow) => void;
}

const ClientsDataTable = ({
  data,
  onRowClick,
  enableFiltering,
  enableSorting,
  enablePagination,
}: ClientsDataTableProps) => {
  // Temporarily, just as a placeholder for future changes
  console.log(`Filtering enabled: ${enableFiltering || false}`);
  console.log(`Sorting enabled: ${enableSorting || false}`);
  console.log(`Pagination enabled: ${enablePagination || false}`);

  const handleRowClick = (row: DataTableRow) => onRowClick?.(row);

  return <DataTable columns={columns} rows={data} onRowClick={handleRowClick} />;
};

ClientsDataTable.propTypes = {
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

export default ClientsDataTable;
