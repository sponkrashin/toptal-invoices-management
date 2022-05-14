import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

import DataTable from 'components/ui/DataTable';
import { preventDefault } from 'utils/utils';

const columns = [
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
    getValue: (row) => (
      <Link href={`mailto:${row.contactEmail}`} onClick={preventDefault}>
        {row.contactEmail}
      </Link>
    ),
  },
];

function ClientsDataTable({
  data,
  onRowClick,
  enableFiltering,
  enableSorting,
  enablePagination,
}) {
  // Temporarily, just as a placeholder for future changes
  console.log(`Filtering enabled: ${enableFiltering || false}`);
  console.log(`Sorting enabled: ${enableSorting || false}`);
  console.log(`Pagination enabled: ${enablePagination || false}`);

  return <DataTable columns={columns} rows={data} onRowClick={onRowClick} />;
}

ClientsDataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
  onRowClick: PropTypes.func,
  enableFiltering: PropTypes.bool,
  enableSorting: PropTypes.bool,
  enablePagination: PropTypes.bool,
};

export default ClientsDataTable;
