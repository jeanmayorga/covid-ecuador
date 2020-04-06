import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { withFirebase } from '../firebase';
import { FirebaseTypes } from '../firebase/firebase';
import '../less/App.less';
import { AdminHome } from '../pages/Admin/Home';
import { AdminProvince } from '../pages/Admin/Province';
import { AdminProvinces } from '../pages/Admin/Provinces';
import Datos from '../pages/datos-de';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Province } from '../pages/Province';
import { Register } from '../pages/Register';
import { Dispatch, RootState } from '../store';
import { setIsLoading } from '../store/modules/loading';
import { setAuthenticated, setUser } from '../store/modules/user';

import { LoggedRoute, NotLoggedRoute } from './routes';

interface Props {
  firebase: FirebaseTypes;
}

function Routes({ firebase }: Props) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (hasUser: any) => {
      if (hasUser) {
        dispatch(
          setUser({
            userId: hasUser.uid!,
            email: hasUser.email!,
          }),
        );
        dispatch(setAuthenticated(true));
        dispatch(setIsLoading(false));
      } else {
        dispatch(setIsLoading(false));
      }
      unsubscribe();
    });
  }, [dispatch, firebase]);

  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/provincia/:palabra' component={Datos} />
        <Route exact path='/provincia/:provinceName' component={Province} />

        <Route exact path='/admin' render={() => (user.isAuthenticated ? <AdminHome /> : <Login />)} />
        <NotLoggedRoute exact path='/admin/r' Component={Register} />
        <NotLoggedRoute exact path='/admin/login' Component={Login} />
        <LoggedRoute exact path='/admin/home' Component={AdminHome} />
        <LoggedRoute exact path='/admin/provinces' Component={AdminProvinces} />
        <LoggedRoute exact path='/admin/province/:provinceSlug' Component={AdminProvince} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

const routesToExport = withFirebase(Routes);
export { routesToExport as Routes };
