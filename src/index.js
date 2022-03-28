import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
