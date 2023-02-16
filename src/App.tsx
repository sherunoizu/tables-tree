import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Grid } from '@mui/material';

// import { Table } from './components/Table';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { MainContent } from './components/MainContent';

import { TableProvider } from './context';

import './App.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <TableProvider>
      <CssBaseline />
      <div className='App'>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={2} className='grid-items-r '>
            <NavigationBar />
          </Grid>
          <Grid item xs={10}>
            <MainContent />
          </Grid>
        </Grid>
        {/* <Table /> */}
      </div>
    </TableProvider>
  </ThemeProvider>
);

export default App;
