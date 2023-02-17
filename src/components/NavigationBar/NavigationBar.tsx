import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

import { NavigationItem } from './NavigationItem';

import { useTables } from '../../hooks';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
  const { tables, setTitle } = useTables();

  const onProjectTitleClickHandler = (
    title: string
  ) => {
    setTitle(title);
  };

  return (
    <Box className='navigation-bar'>
      <Box>
        {tables.map((table) => (
          <Link
            to={`/${table.id}`}
            className='navigation-link'
            onClick={() => onProjectTitleClickHandler(`${table.id}`)}
          >
            <NavigationItem title={`${table.id}`} />
          </Link>
        ))}
      </Box>
      <Button variant='outlined'>Новый проект</Button>
    </Box>
  );
};
