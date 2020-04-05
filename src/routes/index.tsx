import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import '../less/App.less';
import { AdminHome } from '../pages/Admin/Home';
import Datos from '../pages/datos-de';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Province } from '../pages/Province';
import { RootState } from '../store';

export function LoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  return <Route {...rest} render={props => (user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />;
}

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/provincia/:provinceName' component={Province} />
      <Route exact path='/provincia/:palabra' component={Datos} />
      {/*  logged user routes */}
      <Route exact path='/admin/login' component={Login} />
      <LoggedRoute exact path='/admin/' component={AdminHome} />
      <Route component={NotFound} />
    </Switch>
  );
}
