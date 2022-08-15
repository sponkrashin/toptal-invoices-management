import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styles from './DataTable.module.scss';

export interface DataTableColumn {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  field?: string;
  title: string;
  getValue?: (row: any) => any;
}

export interface DataTableRow {
  [columnKey: string]: any;
  key: string | number;
}

export interface DataTableProps {
  columns: DataTableColumn[];
  rows: DataTableRow[];
  onRowClick: (row: DataTableRow) => void;
}

const DataTable = ({ columns, rows, onRowClick }: DataTableProps) => {
  const tableHeaderCells = columns.map((c, i) => (
    <TableCell key={i} align={c.align || 'left'}>
      {c.title}
    </TableCell>
  ));

  const getTableRowCellsFunc = (row: DataTableRow) =>
    columns.map((c, i) => (
      <TableCell key={i} align={c.align || 'left'}>
        {c.field ? row[c.field] : c.getValue?.(row)}
      </TableCell>
    ));

  const getRowClickHandler = (row: DataTableRow) => onRowClick && (() => onRowClick(row));

  const tableRows = rows.map((row) => (
    <TableRow className={styles.row} key={row.key} onClick={getRowClickHandler(row)}>
      {getTableRowCellsFunc(row)}
    </TableRow>
  ));

  return (
    <Table size="small">
      <TableHead>
        <TableRow>{tableHeaderCells}</TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  );
};

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
      key: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    })
  ),
  onRowClick: PropTypes.func,
};

export default DataTable;
