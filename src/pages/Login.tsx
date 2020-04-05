import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import bg from '../bg/bg.jpg';
import { withFirebase } from '../firebase';
import { FirebaseTypes } from '../firebase/firebase';
import '../less/Login.less';
import { Dispatch } from '../store';
import { setAuthenticated, setUser } from '../store/modules/user';

interface Props {
  firebase: FirebaseTypes;
}

function Login({ firebase }: Props) {
  const history = useHistory<typeof useHistory>();
  const dispatch = useDispatch<Dispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginFormSubmit = async (data: any) => {
    const { email, password } = data;
    setIsLoading(true);

    try {
      const firebaseRequest = await firebase.auth.signInWithEmailAndPassword(email, password);
      dispatch(
        setUser({
          userId: firebaseRequest.user?.uid!,
          email: firebaseRequest.user?.email!,
        }),
      );
      dispatch(setAuthenticated(true));
      history.push('/admin/home');
      setIsLoading(false);
    } catch (error) {
      Modal.error({ title: 'Error', content: error.message });
      setIsLoading(false);
    }
  };

  return (
    <Row className='Admin'>
      <Col span={15} className='bg'>
        <div className='image'>
          <img src={bg} alt='Wallpaper' />
        </div>
      </Col>
      <Col span={8} className='LoginOut'>
        <div className='LoginBox'>
          <h1>
            Welcome <br />
            Back!
          </h1>
          <p>Login here with your credentials.</p>
          <Form onFinish={loginFormSubmit}>
            <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input placeholder='Email' size='large' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder='Password' size='large' />
            </Form.Item>
            <Form.Item>
              <Button
                icon={<ArrowRightOutlined />}
                loading={isLoading}
                type='primary'
                shape='round'
                htmlType='submit'
                size='large'
                block>
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <p>
            Are not member yet? <Link to='/admin/r'>Sign Up</Link>
          </p>
        </div>
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

const loginToExport = withFirebase(Login);
export { loginToExport as Login };
