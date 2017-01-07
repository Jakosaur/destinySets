import 'isomorphic-fetch';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter.js';
import './index.styl';

import './DestinyTracker.js';
import './DestinyTracker.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
