import React from 'react';

// import { Card, Box, Divider, Typography, Grid } from '@mui/material';
import { Button, Box } from '@mui/material';

import { NavigationItem } from './NavigationItem';

import { useTables } from '../../hooks';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
  const { tables } = useTables();

  return (
    <Box className='navigation-bar'>
      <Box>
        {tables.map((table) => (
          <NavigationItem title={table.rowName} />
        ))}
      </Box>
      <Button variant='outlined'>Новый проект</Button>
    </Box>
  );
};
