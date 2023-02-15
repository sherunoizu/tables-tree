import React from 'react';
import axios from 'axios';

import './App.css';

const apiBase = 'http://185.244.172.108:8081/';

const eID = '52201';

const mockData = {
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  parentId: 50743,
  rowName: 'string1',
  salary: 0,
  supportCosts: 0
} as IMock;

const App = () => {
  const getData = async () => {
    const response = await axios.get(`${apiBase}/v1/outlay-rows/entity/${eID}/row/list`);
    return response;
  };

  const createRow = async (row: IMock) => {
    const response = await axios.post(`${apiBase}/v1/outlay-rows/entity/${eID}/row/create`, row);
    return response;
  };

  const onCreateClick = async () => {
    createRow(mockData).then((res) => console.log(res.data));
  };

  const onGetClick = async () => {
    await getData().then((res) => console.log(res.data));
  };

  // useEffect(() => {
  //   getData().then((res) => console.log(res.data));
  //   // .then((res) => console.log(res.child));
  // }, []);

  return (
    <div className='App'>
      <button onClick={onGetClick}>Get data</button>
      <button onClick={onCreateClick}>Create Row</button>
    </div>
  );
};

export default App;
