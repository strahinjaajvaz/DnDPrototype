import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import {observe} from './components/Game';

import './index.css';

const rootEl = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(
      <Board knightPosition={knightPosition} />,
      rootEl
    )
  );