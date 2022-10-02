import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import store from './store';
import {CssBaseline} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
 ,
  document.getElementById('root')
);
