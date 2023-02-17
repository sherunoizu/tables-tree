import React, { useState, useMemo } from 'react';

import { TableContext } from './table.context';

import { useTableService } from '../service';

const initialState: ITable[] = [];

export const TableProvider: React.FC<ITableProviderProps> = ({ children }) => {
  const [tables, setTables] = useState(initialState);

  const [projectTitle, setProjectTitle] = useState('');

  const { getData, deleteRow } = useTableService();

  const setTitle = (title: string) => {
    setProjectTitle(title);
  };

  const getDataList = () =>
    getData().then((res) => {
      setTables(res.data);
    });

  const deleteTableRow = (row: number) => {
    deleteRow(row).then(getDataList);
  };

  const value = useMemo(
    () => ({
      tables,
      getDataList,
      projectTitle,
      setTitle,
      deleteTableRow
    }),
    [tables, projectTitle]
  );

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
