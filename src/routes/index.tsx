import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Datos from '../pages/datos-de';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/provincia/:palabra' component={Datos} />
    </Switch>
  );
}
