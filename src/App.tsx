import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import Datos from './pages/datos-de';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/provincia/:palabra' component={Datos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
