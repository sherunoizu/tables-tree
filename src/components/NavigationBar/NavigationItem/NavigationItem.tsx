import React from 'react';

import { Box, Typography } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';

import './NavigationItem.styles.scss';

export const NavigationItem: React.FC<INavigationItemProps> = ({ title }) => (
  <Box className='navigation-item-container'>
    <GridViewIcon />
    <Typography>{title}</Typography>
  </Box>
);
