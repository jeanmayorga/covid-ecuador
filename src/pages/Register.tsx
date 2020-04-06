import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import bg from '../bg/bg.jpg';
import { withFirebase } from '../firebase';
import { FirebaseTypes } from '../firebase/firebase';
import '../less/Login.less';

interface Props {
  firebase: FirebaseTypes;
}

function Register({ firebase }: Props) {
  const history = useHistory<typeof useHistory>();
  const [step, setStep] = useState<'signup' | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const codeFormSubmit = async (data: any) => {
    const { lockCode } = data;
    if (lockCode === '123abc') {
      setStep('signup');
    }
  };

  const sigupFormSubmit = async (data: any) => {
    const { email, password } = data;
    setIsLoading(true);

    try {
      await firebase.auth.createUserWithEmailAndPassword(email, password);
      message.success('Account Created!', 2);
      history.push('/admin/login');
      setIsLoading(false);
    } catch (error) {
      Modal.error({ title: 'Error', content: error.message });
      setIsLoading(false);
    }
  };

  return (
    <Row className='Admin'>
      <Col span={14} className='bg'>
        <div className='image'>
          <img src={bg} alt='Wallpaper' />
        </div>
      </Col>
      <Col span={1}></Col>
      <Col span={8} className='LoginOut'>
        <div className='LoginBox'>
          <h1>
            Thank you for <br />
            Helping us!
          </h1>
          {step === 'signup' ? (
            <>
              <h2>Create a new account!</h2>
              <p>Tell us your data.</p>
              <Form onFinish={sigupFormSubmit}>
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
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
              <p>
                Are you member? <Link to='/admin/login'>Sign In</Link>
              </p>
            </>
          ) : (
            <>
              <p>First write the pass.</p>
              <Form onFinish={codeFormSubmit}>
                <Form.Item name='lockCode' rules={[{ required: true, message: 'Please input the code!' }]}>
                  <Input placeholder='What is the code ?' size='large' />
                </Form.Item>
                <Form.Item>
                  <Button
                    icon={<ArrowRightOutlined />}
                    type='primary'
                    shape='round'
                    htmlType='submit'
                    size='large'
                    block>
                    Unlock
                  </Button>
                </Form.Item>
              </Form>
              <p>
                Are you member? <Link to='/admin/login'>Sign In</Link>
              </p>
            </>
          )}
        </div>
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

const registerToExport = withFirebase(Register);
export { registerToExport as Register };
