interface ITable {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number | null;
  rowName: string;
  salary: number;
  total: number;
  supportCosts: number;
  child?: ITable[];
  id: number;
}

interface ITableContextProps {
  tables: ITable[];
  getDataList: () => void;
  deleteTableRow: (row: number) => void;
  projectTitle: string;
  setTitle: (title: string) => void;
}

interface ITableProviderProps {
  children: React.ReactNode;
}

type IInitialState = {
  title: string;
  data: ITable[];
};

interface INavigationItemProps {
  title: string;
}

type ILevelIconsMode = {
  mode: 'parent' | 'child';
  pad: number;
  rowID: number;
};

interface ITableRowProps {
  node: ITable;
  pad?: number;
  mode?: 'parent' | 'child';
}
