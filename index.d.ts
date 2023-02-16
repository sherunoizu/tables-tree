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
  supportCosts: number;
  child?: ITable[];
  id: number;
}

interface ITableContextProps {
  tables: ITable[];
  getDataList: () => void;
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
