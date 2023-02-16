import React, { useState, useMemo } from 'react';

import { TableContext } from './table.context';

import { useTableService } from '../service';

const initialState: ITable[] = [];

export const TableProvider: React.FC<ITableProviderProps> = ({ children }) => {
  const [tables, setTables] = useState(initialState);

  const { getData } = useTableService();

  const getDataList = () =>
    getData().then((res) => {
      setTables(res.data);
    });

  const value = useMemo(
    () => ({
      tables,
      getDataList
    }),
    [tables]
  );

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
