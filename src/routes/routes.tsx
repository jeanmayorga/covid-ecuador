import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Layout } from '../components/Admin/Layout';
import { NotFound } from '../pages/NotFound';
import { RootState } from '../store';

export function LoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  console.log(user.isAuthenticated);
  return (
    <Layout>
      <Route {...rest} render={props => (user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />
    </Layout>
  );
}
export function NotLoggedRoute({ Component, ...rest }: any) {
  const user = useSelector((state: RootState) => state.user);
  console.log(user.isAuthenticated);
  return (
    <Layout>
      <Route {...rest} render={props => (!user.isAuthenticated ? <Component {...props} /> : <NotFound />)} />
    </Layout>
  );
}
