import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

import bg from '../bg/bg.jpg';
import '../less/Login.less';

// tslint:disable-next-line: variable-name
export const Login = () => {
  const loginFormSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Row>
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
            <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder='Username' size='large' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder='Password' size='large' />
            </Form.Item>
            <Form.Item>
              <Button icon={<ArrowRightOutlined />} type='primary' shape='round' htmlType='submit' size='large' block>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col span={1}></Col>
    </Row>
  );
};
