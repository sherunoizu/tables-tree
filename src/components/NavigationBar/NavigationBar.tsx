import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

import { NavigationItem } from './NavigationItem';

import { useTables } from '../../hooks';
import { useTableService } from '../../service';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
  const { tables, setTitle, createTableRow } = useTables();
  const { DEFAULT_ROW } = useTableService();

  const onProjectTitleClickHandler = (title: string) => {
    setTitle(title);
  };

  const onCreateHandler = () => {
    const data = createTableRow({ ...DEFAULT_ROW, parentId: null });

    data.then((res) => {
      createTableRow({ ...DEFAULT_ROW, parentId: res.current.id });
    });
  };

  return (
    <Box className='navigation-bar'>
      <Box>
        {tables.map((table) => (
          <Link
            to={`/${table.id}`}
            key={table.id}
            className='navigation-link'
            onClick={() => onProjectTitleClickHandler(`${table.id}`)}
          >
            <NavigationItem title={`${table.id}`} />
          </Link>
        ))}
      </Box>
      <Button onClick={onCreateHandler} variant='outlined'>
        Новый проект
      </Button>
    </Box>
  );
};
