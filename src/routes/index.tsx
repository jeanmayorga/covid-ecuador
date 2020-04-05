import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { withFirebase } from '../firebase';
import { FirebaseTypes } from '../firebase/firebase';
import '../less/App.less';
import { AdminHome } from '../pages/Admin/Home';
import Datos from '../pages/datos-de';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Province } from '../pages/Province';
import { Register } from '../pages/Register';
import { Dispatch } from '../store';
import { setIsLoading } from '../store/modules/loading';
import { setAuthenticated, setUser } from '../store/modules/user';

import { LoggedRoute, NotLoggedRoute } from './routes';

interface Props {
  firebase: FirebaseTypes;
}

function Routes({ firebase }: Props) {
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
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/provincia/:provinceName' component={Province} />
      <Route exact path='/provincia/:palabra' component={Datos} />

      <NotLoggedRoute exact path='/admin/r' component={Register} />
      <NotLoggedRoute exact path='/admin/login' component={Login} />
      <LoggedRoute exact path='/admin/home' component={AdminHome} />

      <Route component={NotFound} />
    </Switch>
  );
}

const routesToExport = withFirebase(Routes);
export { routesToExport as Routes };
