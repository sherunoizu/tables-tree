import { useContext } from 'react';

import { TableContext } from '../context';

export const useTables = () => useContext(TableContext);
