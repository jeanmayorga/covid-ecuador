import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { AdminHome } from '../pages/Admin/Home';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { RootState } from '../store';

export function LoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  return <Route {...rest} render={props => (user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />;
}

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/*  logged user routes */}
      <LoggedRoute exact path='/admin/' component={AdminHome} />
      <Route component={NotFound} />
    </Switch>
  );
}
