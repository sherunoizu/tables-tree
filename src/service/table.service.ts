import axios from 'axios';

export const useTableService = () => {
  const apiBase = 'http://185.244.172.108:8081/';
  const eID = '52201';

  const getId = async () => {
    const response = await axios.get(`${apiBase}/v1/outlay-rows/entity/create`);
    return response;
  };

  const getData = async () => {
    const response = await axios.get(`${apiBase}/v1/outlay-rows/entity/${eID}/row/list`);
    return response;
  };

  const createRow = async (row: ITable) => {
    const response = await axios.post(`${apiBase}/v1/outlay-rows/entity/${eID}/row/create`, row);
    return response;
  };

  return { getId, getData, createRow };
};

// const mockData = {
//   equipmentCosts: 0,
//   estimatedProfit: 0,
//   machineOperatorSalary: 0,
//   mainCosts: 0,
//   materials: 0,
//   mimExploitation: 0,
//   overheads: 0,
//   parentId: 50743,
//   rowName: 'string1',
//   salary: 0,
//   supportCosts: 0
// } as IMock;
