import axios from 'axios';

export const useTableService = () => {
  const apiBase = 'http://185.244.172.108:8081/';
  // const apiDB = 'TGuHPX';

  const getId = async () => {
    const response = await axios.get(`${apiBase}/v1/outlay-rows/entity/create`);
    return response;
  };

  return getId;
};
