import { createContext } from 'react';

export const TableContext = createContext<ITableContextProps>({
  tables: [],
  getDataList: () => {},
  deleteTableRow: () => {},
  createTableRow: (id) =>
    new Promise((resolve) => {
      resolve(id);
    }),
  updateTableRow: () => {},
  projectTitle: '',
  setTitle: () => {}
});
