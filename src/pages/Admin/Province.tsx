import { ArrowRightOutlined, LoadingOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, Menu, Progress, Row, Skeleton, Spin, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getProvince, setProvince } from '../../api/provinces';
import { uploadImage } from '../../api/upload';
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
const AdminProvince = ({ firebase }: Props) => {
  const { provinceSlug } = useParams();
  const [form] = Form.useForm();
  const dispatch = useDispatch<Dispatch>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [province, setProvinceState] = useState<Province | undefined>(undefined);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [progressUpload, setProgressUpload] = useState<number>(0);
  const [cover, setCover] = useState<string>('');

  const history = useHistory<typeof useHistory>();

  const logout = async () => {
    setIsCollapsed(true);
    await firebase.auth.signOut();
    history.push('/admin/login');
    dispatch(setIsLoading(false));
    dispatch(setAuthenticated(false));
    dispatch(removeUser());
  };

  const provinceFormSubmit = async (data: any) => {
    setIsAdding(true);
    const provinceToSave: Province = {
      Name: data.Name,
      slug: data.slug,
      cover,
    };
    await setProvince({ firebase, province: provinceToSave });
    setIsAdding(false);
    history.push('/admin/provinces');
  };

  const customUpload = async (options: { file: any }) => {
    setUploadingImage(true);
    const imageName = `province/${province?.slug}.jpg`;
    const uploadTask = uploadImage({
      firebase,
      imageName,
      file: options.file,
    });

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressUpload(progress);
      },
      // tslint:disable-next-line: no-console
      error => console.log(error),
      () => {
        setCover(`https://storage.cloud.google.com/coronavirus-ecuador.appspot.com/${imageName}`);
        setUploadingImage(false);
      },
    );
  };

  useEffect(() => {
    getProvince({ firebase, provinceSlug: provinceSlug! }).then(response => {
      setProvinceState(response);
      if (response.cover) {
        setCover(response.cover);
      }
      form.setFieldsValue(response);
      setIsFetching(false);
    });
  }, [firebase, provinceSlug, form]);

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
              {!province ? (
                <h3>No province</h3>
              ) : (
                <Form onFinish={provinceFormSubmit} form={form}>
                  <Row gutter={20}>
                    <Col span={24}>
                      <Form.Item name='cover'>
                        <h3>Cover</h3>
                        <Upload.Dragger customRequest={customUpload}>
                          {uploadingImage && (
                            <div className='uploadingImageIn'>
                              {progressUpload === 100 ? (
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 38 }} spin />} />
                              ) : (
                                <Progress type='circle' percent={progressUpload} width={50} />
                              )}
                            </div>
                          )}
                          {cover !== '' && <img src={cover} alt='wall' onLoad={() => setUploadingImage(false)} />}
                        </Upload.Dragger>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <h3>Name</h3>
                      <Form.Item name='Name' rules={[{ required: true, message: 'Please input a name!' }]}>
                        <Input placeholder='Name' size='large' />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <h3>Slug</h3>
                      <Form.Item name='slug' rules={[{ required: true, message: 'Please input a slug!' }]}>
                        <Input placeholder='slug' size='large' />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <h3>Actions</h3>
                      <Form.Item>
                        <Button
                          icon={<ArrowRightOutlined />}
                          loading={isAdding}
                          type='primary'
                          shape='round'
                          htmlType='submit'
                          size='large'
                          block>
                          Save
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              )}
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

const constToExport = withFirebase(AdminProvince);
export { constToExport as AdminProvince };
