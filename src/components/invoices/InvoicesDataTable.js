import PropTypes from 'prop-types';

import DataTable from 'components/ui/DataTable';

const columns = [
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
    getValue: (row) => `$${row.amount}`,
    align: 'right',
  },
];

function InvoicesDataTable({
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

InvoicesDataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
  enableFiltering: PropTypes.bool,
  enablePagination: PropTypes.bool,
  enableSorting: PropTypes.bool,
  onRowClick: PropTypes.func,
};

export default InvoicesDataTable;
