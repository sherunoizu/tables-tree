import React, { useEffect } from 'react';

import { useTables } from '../../hooks';

import { TableRow } from './TableRow';

export const Table = () => {
  const { tables, getDataList } = useTables();

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div className='App'>
      {tables.map((table) => (
        <TableRow key={table.id} node={table} />
      ))}
    </div>
  );
};
