import { Row, Col, Tag, Progress } from 'antd';
import React from 'react';
import ProgresoCircle from '../components/progreso_circle';
import ProgresoLine from '../components/progreso_barra';
import Statico from '../components/static';
import Footer from '../components/footer';
import Head from '../components/head';
import "../less/home.less";


export const Home = () => {
  return (
    <>
    <Head titulo='COVID-19 - Ecuador' />
      <section className='container-head-home'>
        <Row justify="center">
          <Col xs={24} md={14}>
            <h1>ECUADOR &nbsp; <img src='https://image.flaticon.com/icons/svg/330/330581.svg' /> &nbsp; lucha contra el Covid-19</h1>

            <p>El MSP dispone al momento de 27 hospitales para atención especifica de casos de coronavirus, 2.100 centros médicos, además 133 hospitales habilitados para atender a la ciudadanía para otro tipo de consultas.</p>
            <p>El 29 de febrero de 2020 se confirmó el primer caso de coronavirus. El 13/03/2020 se activó el COE Nacional para la coordinación de la emergencia.</p>
            <p>Mediante Acuerdo Ministerial No 00126-2020 emitido el 11 de marzo de 2020 por la Ministra de Salud, se declara el Estado de Emergencia Sanitaria en el Sistema Nacional de Salud.</p>
         
          </Col>
          
          <Col xs={24} md={12} className='etiquetas'>
              <Tag color="processing">Sin Riesgos</Tag>
              <Tag color="warning">En Aumento de Riesgos</Tag>
              <Tag color="error">Mucho Riesgos</Tag>
          </Col>
        </Row>
      </section>
      
      <div className='estatico'>
        <Row justify='center'>
          <Col xs={7} md={3}>
            <Statico label="Sierra" valor={10} />
            <ProgresoCircle porciento={40} />
          </Col>
          <Col xs={7} md={3}>
            <Statico label="Costa" valor={100} />
            <ProgresoCircle porciento={80} />
          </Col>
          <Col xs={7} md={3}>
            <Statico label="Oriente" valor={60} />
            <ProgresoCircle porciento={100} />
          </Col>
        </Row>
      </div>

      <div>MAPA ECUADOR</div>

<br/><br/><br/><br/><br/>
    <div>
      <Row justify="center">
        <Col xs={20} md={15}>
          <strong>Manabi:</strong>
          <ProgresoLine porcentaje={40} />
        </Col>
        <Col xs={20} md={15}>
          <strong>Azuay:</strong>
          <ProgresoLine porcentaje={80} />
        </Col>
        <Col xs={20} md={15}>
          <strong>Los Rios:</strong>
          <ProgresoLine porcentaje={32} />
        </Col>
      </Row>
    </div>

    <br/><br/>

      <Footer />
    </>
  );
}
