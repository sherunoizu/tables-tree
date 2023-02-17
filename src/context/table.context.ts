import { createContext } from 'react';

export const TableContext = createContext<ITableContextProps>({
  tables: [],
  getDataList: () => {},
  deleteTableRow: () => {},
  projectTitle: '',
  setTitle: () => {}
});
