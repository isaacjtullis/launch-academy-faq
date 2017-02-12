import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './constants/data';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);

//<App data={data[0]} />,
