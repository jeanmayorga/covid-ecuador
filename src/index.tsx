import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Firebase, FirebaseContext } from './firebase';
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';

import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
