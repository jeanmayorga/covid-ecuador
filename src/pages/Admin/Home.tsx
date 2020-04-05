import { Layout, Menu } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { withFirebase } from '../../firebase';
import { FirebaseTypes } from '../../firebase/firebase';
import { Dispatch, RootState } from '../../store';
import { setIsLoading } from '../../store/modules/loading';
import { removeUser, setAuthenticated } from '../../store/modules/user';

const { Header, Content, Footer } = Layout;

interface Props {
  firebase: FirebaseTypes;
}
// tslint:disable-next-line: variable-name
const AdminHome = ({ firebase }: Props) => {
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: RootState) => state.user);

  const history = useHistory<typeof useHistory>();

  const logout = async () => {
    await firebase.auth.signOut();
    history.push('/admin/login');
    dispatch(setIsLoading(false));
    dispatch(setAuthenticated(false));
    dispatch(removeUser());
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3' onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
        <div className='site-layout-background' style={{ padding: 24, minHeight: 380 }}>
          <>
            <h1>Logged Route</h1>
            <p>Hi, {user.user?.userId}</p>
          </>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

const constToExport = withFirebase(AdminHome);
export { constToExport as AdminHome };
