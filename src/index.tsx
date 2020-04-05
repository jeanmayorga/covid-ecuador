import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Firebase, FirebaseContext } from './firebase';
import { Routes } from './routes';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
