import React, { useEffect } from 'react';
import { TableBody } from '@mui/material';

import { Route, Routes } from 'react-router-dom';

import { useTables } from '../../hooks';

import { TableRow } from './TableRow';

import './Table.styles.scss';

export const Table = () => {
  const { tables, getDataList } = useTables();

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <TableBody>
      <Routes>
        <Route
          path='/'
          element={
            <tr className='choose'>
              <td>Выберите проект</td>
            </tr>
          }
        />
        {tables.map(
          (table) =>
            table.child && (
              <Route
                key={table.id}
                path={`/${table.id}`}
                element={<TableRow key={table.id} node={table} />}
              />
            )
        )}
      </Routes>
    </TableBody>
  );
};
