import React, { useState } from 'react';

import { TableCell, TextField } from '@mui/material';

import { useTables } from '../../../hooks';

import './TableCells.styles.scss';

export const TableCells: React.FC<ITableCells> = ({ table, isEdit, toggleEditMode }) => {
  const { rowName, salary, materials, mainCosts, overheads } = table;

  const { updateTableRow } = useTables();

  const [edittingTable, setEdittingTable] = useState({
    rowName,
    salary,
    materials,
    mainCosts,
    overheads
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEdittingTable({ ...edittingTable, [name]: value });
  };

  const onEnterPressed = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      updateTableRow(
        {
          ...edittingTable,
          mimExploitation: 0,
          supportCosts: 0,
          machineOperatorSalary: 0,
          estimatedProfit: 0,
          equipmentCosts: 0
        },
        table.id
      );
      toggleEditMode();
    }
  };

  return isEdit ? (
    <>
      <TableCell align='center'>
        <TextField
          fullWidth
          value={edittingTable.rowName}
          onChange={onChangeHandler}
          onKeyDown={onEnterPressed}
          name='rowName'
          className='text-field'
          sx={{ padding: 0 }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          value={edittingTable.salary}
          onChange={onChangeHandler}
          onKeyDown={onEnterPressed}
          name='salary'
          className='text-field'
          sx={{ padding: 0 }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          value={edittingTable.materials}
          onChange={onChangeHandler}
          onKeyDown={onEnterPressed}
          name='materials'
          className='text-field'
          sx={{ padding: 0 }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          value={edittingTable.mainCosts}
          onChange={onChangeHandler}
          onKeyDown={onEnterPressed}
          name='mainCosts'
          className='text-field'
          sx={{ padding: 0 }}
        />
      </TableCell>
      <TableCell align='center'>
        <TextField
          value={edittingTable.overheads}
          onChange={onChangeHandler}
          onKeyDown={onEnterPressed}
          name='overheads'
          className='text-field'
          sx={{ padding: 0 }}
        />
      </TableCell>
    </>
  ) : (
    <>
      <TableCell align='center'>{table.rowName}</TableCell>
      <TableCell align='center'>{table.salary}</TableCell>
      <TableCell align='center'>{table.materials}</TableCell>
      <TableCell align='center'>{table.mainCosts}</TableCell>
      <TableCell align='center'>{table.overheads}</TableCell>
    </>
  );
};
