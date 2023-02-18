import React, { useState, useMemo } from 'react';

import { TableContext } from './table.context';

import { useTableService } from '../service';

const initialState: ITable[] = [];

export const TableProvider: React.FC<ITableProviderProps> = ({ children }) => {
  const [tables, setTables] = useState(initialState);

  const [projectTitle, setProjectTitle] = useState('');

  const { getData, deleteRow, createRow, updateRow } = useTableService();

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

  const createTableRow = (row: IUpdateTable) => {
    const response = createRow(row).then((res) => res.data);

    getDataList();

    return response;
  };

  const updateTableRow = (row: IUpdateTable, rID: number) => {
    updateRow(row, rID).then(getDataList);
  };

  const value = useMemo(
    () => ({
      tables,
      getDataList,
      deleteTableRow,
      createTableRow,
      updateTableRow,
      projectTitle,
      setTitle
    }),
    [tables, projectTitle]
  );

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};
