import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { RootState } from '../store';

export function LoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  return <Route {...rest} render={props => (user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />;
}

export function NotLoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  return <Route {...rest} render={props => (!user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />;
}
