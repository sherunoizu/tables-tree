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

  const updateRow = async (row: ITable, rID: number) => {
    const response = await axios.post(
      `${apiBase}/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
      row
    );
    return response;
  };

  const deleteRow = async (row: number) => {
    const rID = row;
    const response = await axios.delete(
      `${apiBase}/v1/outlay-rows/entity/${eID}/row/${rID}/delete`
    );
    return response;
  };

  const DEFAULT_ROW = {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: 0,
    rowName: '',
    salary: 0,
    total: 0,
    supportCosts: 0
  };

  return { getId, getData, createRow, deleteRow, updateRow, DEFAULT_ROW };
};
