import React, { useEffect, useState } from 'react';

import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
  // Paper
} from '@mui/material';

import { useTables } from '../../hooks';

export const MainContent: React.FC<ITableProviderProps> = ({ children }) => {
  const [cellNames, setCellNames] = useState(['']);
  const { tables } = useTables();

  useEffect(() => {
    if (tables.length !== 0) {
      setCellNames(
        Object.keys(tables[0]).filter(
          (key) =>
            key !== 'id' &&
            key !== 'rowName' &&
            key !== 'child' &&
            key !== 'mimExploitation' &&
            key !== 'machineOperatorSalary' &&
            key !== 'equipmentCosts' &&
            key !== 'estimatedProfit' &&
            key !== 'supportCosts'
        )
      );
    }
  }, [tables]);

  return (
    <TableContainer component={Box} >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell align='center'>rowName</TableCell>
            {cellNames.map((key) => (
              <TableCell align='right'>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </Table>
    </TableContainer>
  );
};
