import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableRowStyled = styled(TableRow)(({ onClick }) => ({
  cursor: onClick && 'pointer',
}));

function DataTable({ columns, rows, onRowClick }) {
  const tableHeaderCells = columns.map((c, i) => (
    <TableCell key={i} align={c.align || 'left'}>
      {c.title}
    </TableCell>
  ));

  const getTableRowCellsFunc = (row) =>
    columns.map((c, i) => (
      <TableCell key={i} align={c.align || 'left'}>
        {c.field ? row[c.field] : c.getValue(row)}
      </TableCell>
    ));

  const getRowClickHandler = (row) => onRowClick && (() => onRowClick(row));

  const tableRows = rows.map((row) => (
    <TableRowStyled key={row.key} onClick={getRowClickHandler(row)}>
      {getTableRowCellsFunc(row)}
    </TableRowStyled>
  ));

  return (
    <Table size="small">
      <TableHead>
        <TableRow>{tableHeaderCells}</TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        field: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        align: PropTypes.string,
      }),
      PropTypes.shape({
        getValue: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        align: PropTypes.string,
      }),
    ])
  ),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
  onRowClick: PropTypes.func,
};

export default DataTable;
