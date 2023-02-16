import React from 'react';

import { Box, Typography, Grid } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Header.styles.scss';

export const Header = () => (
  <Box bgcolor='#27272A'>
    <Grid container>
      <Grid item xs={12}>
        <Box className='header'>
          <AppsIcon className='navigation' />
          <ReplyIcon className='navigation' />

          <Box display='flex' m='0px 25px'>
            <Typography mr='5px' className='navigation'>
              Просмотр
            </Typography>
            <Typography className='navigation'>Управление</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        className='grid-items'
        item
        xs={2}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box className='accordion'>
          <Typography>Название проекта</Typography>
          <Typography>Абреввиатура</Typography>
        </Box>
        <ExpandMoreIcon className='navigation' />
      </Grid>

      <Grid className='grid-items grid-items-wl-wr' item xs={10} display='flex' alignItems='center'>
        <Box display='flex' m='0px 25px'>
          <Typography>Название проекта</Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
