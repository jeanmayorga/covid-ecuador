import { ArrowRightOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, List, Menu, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { getProvincesLive, removeProvince, setProvince } from '../../api/provinces';
import { withFirebase } from '../../firebase';
import { FirebaseTypes } from '../../firebase/firebase';
import { Province } from '../../interfaces';
import { Dispatch } from '../../store';
import { setIsLoading } from '../../store/modules/loading';
import { removeUser, setAuthenticated } from '../../store/modules/user';

const { Header, Sider, Content } = Layout;

interface Props {
  firebase: FirebaseTypes;
}

// tslint:disable-next-line: variable-name
const AdminProvinces = ({ firebase }: Props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<Dispatch>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [provinces, setProvinces] = useState<Province[] | []>([]);

  const history = useHistory<typeof useHistory>();

  const logout = async () => {
    setIsCollapsed(true);
    await firebase.auth.signOut();
    history.push('/admin/login');
    dispatch(setIsLoading(false));
    dispatch(setAuthenticated(false));
    dispatch(removeUser());
  };

  const provinceFormSubmit = async (province: any) => {
    setIsAdding(true);
    await setProvince({ firebase, province });
    setIsAdding(false);
    form.resetFields();
  };

  useEffect(() => {
    getProvincesLive({ firebase }).on('value', (snapshot: any) => {
      const inObject = snapshot.val();
      const inArray: any[] = inObject ? Object.values(inObject) : [];
      setProvinces(inArray);
      setIsFetching(false);
    });
  }, [firebase]);

  return (
    <Layout className='Admin'>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} style={{ marginTop: '60px' }}>
          <Menu.Item key='1'>
            <UserOutlined />
            <span>Provinces</span>
          </Menu.Item>
          <Menu.Item key='4' onClick={logout}>
            <UploadOutlined />
            <span>Sign Out</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='titleBoard'>Provinces</Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          {isFetching ? (
            <>
              <Skeleton title={false} />
            </>
          ) : (
            <>
              {provinces.length === 0 ? (
                <h3>No provinces</h3>
              ) : (
                <List
                  itemLayout='horizontal'
                  dataSource={provinces}
                  renderItem={item => (
                    <List.Item
                      actions={[
                        <Button shape='round' onClick={() => removeProvince({ firebase, provinceSlug: item.slug })}>
                          Delete
                        </Button>,
                      ]}>
                      <List.Item.Meta
                        title={<Link to={`/admin/province/${item.slug}`}>{item.Name}</Link>}
                        description={item.slug}
                      />
                    </List.Item>
                  )}
                />
              )}
            </>
          )}
          <Form onFinish={provinceFormSubmit} form={form}>
            <Row gutter={20}>
              <Col span={8}>
                <Form.Item name='Name' rules={[{ required: true, message: 'Please input a name!' }]}>
                  <Input placeholder='Name' size='large' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name='slug' rules={[{ required: true, message: 'Please input a slug!' }]}>
                  <Input placeholder='slug' size='large' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Button
                    icon={<ArrowRightOutlined />}
                    loading={isAdding}
                    type='primary'
                    shape='round'
                    htmlType='submit'
                    size='large'
                    block>
                    Add
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

const constToExport = withFirebase(AdminProvinces);
export { constToExport as AdminProvinces };
