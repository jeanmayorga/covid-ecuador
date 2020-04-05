import React from 'react';
import { Row, Col, Descriptions } from 'antd';
import '../less/footer.less';

const Footer = () => {
  return (
    <>
      <Row justify='center' className='footer'>
        <Col xs={24} md={20}>
          <h4>Desarrollado Por:</h4>

          <Row justify='center'>
            <Col xs={12} lg={6}>
              <p className='item'>
                <strong className='resalto'>Frontend:</strong> Andres Coello Goyes
              </p>
              <p className='item'>
                <strong>Email:</strong> goyeselcoca@gmail.com
              </p>
              <p className='item'>
                <strong>Sitio:</strong> Mi sitio personal
              </p>
              <p className='item'>
                <strong>GitHub:</strong> GandresCoello18
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <p className='item'>
                <strong className='resalto'>Backend:</strong> Paul Mayorga
              </p>
              <p className='item'>
                <strong>Email:</strong> paul@gmail.com
              </p>
              <p className='item'>
                <strong>Sitio:</strong> Mi sitio personal
              </p>
              <p className='item'>
                <strong>GitHub:</strong> jpmayorga
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
