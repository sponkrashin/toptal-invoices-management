import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import DataTable, { DataTableColumn, DataTableRow } from 'components/DataTable';
import { Client } from 'data/client';
import { preventDefault } from 'utils/utils';

const columns: DataTableColumn[] = [
  {
    title: 'Client Name',
    getValue: ({ companyDetails: { name } }: Client) => name,
  },
  {
    title: 'Contact',
    field: 'name',
  },
  {
    title: 'Contact Email',
    getValue: ({ email }: Client) => (
      <Link href={`mailto:${email}`} onClick={preventDefault}>
        {email}
      </Link>
    ),
  },
];

export interface ClientsDataTableProps {
  data: Client[];
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
  // console.log(`Filtering enabled: ${enableFiltering || false}`);
  // console.log(`Sorting enabled: ${enableSorting || false}`);
  // console.log(`Pagination enabled: ${enablePagination || false}`);

  const handleRowClick = (row: DataTableRow) => onRowClick?.(row);

  return <DataTable columns={columns} rows={data.map((d) => ({ ...d, key: d.id }))} onRowClick={handleRowClick} />;
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
