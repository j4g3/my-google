import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`


ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>
  , document.getElementById('root'));
