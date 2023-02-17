import React, { useEffect } from 'react';
import { TableBody } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import { useTables } from '../../hooks';

import { TableRow } from './TableRow';

export const Table = () => {
  const { tables, getDataList } = useTables();

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <TableBody>
      <Routes>
        <Route path='/'/>
        {tables.map((table) => (
           table.child && <Route
            path={`/${table.id}`}
            element={<TableRow key={table.id} node={table} />}
          />
        ))}
      </Routes>
    </TableBody>
  );
};
