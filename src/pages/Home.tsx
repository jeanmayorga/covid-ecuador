import { Col, Row, Tag } from 'antd';
import React from 'react';

import Busqueda from '../components/busqueda_p_c';
import Footer from '../components/footer';
import Head from '../components/head';
import ProgresoLine from '../components/progreso_barra';
import ProgresoCircle from '../components/progreso_circle';
import Statico from '../components/static';
import '../less/home.less';

const data = [
  {
    key: '1',
    provincia: 'Manabi',
    poblacion: 10292,
    infectados: 932,
    progreso: 12,
  },
  {
    key: '2',
    provincia: 'Los Rios',
    poblacion: 10292,
    infectados: 932,
    progreso: 47,
  },
  {
    key: '3',
    provincia: 'Azuay',
    poblacion: 10292,
    infectados: 932,
    progreso: 60,
  },
];

export const Home = () => {
  return (
    <>
      <Head titulo='COVID-19 - Ecuador' />
      <section className='container-head-home'>
        <Row justify='center'>
          <Col xs={24} md={14}>
            <h1>
              ECUADOR &nbsp; <img src='https://image.flaticon.com/icons/svg/330/330581.svg' alt='' /> &nbsp; lucha contra el
              Covid-19
            </h1>

            <p>
              El MSP dispone al momento de 27 hospitales para atención especifica de casos de coronavirus, 2.100 centros
              médicos, además 133 hospitales habilitados para atender a la ciudadanía para otro tipo de consultas.
            </p>
            <p>
              El 29 de febrero de 2020 se confirmó el primer caso de coronavirus. El 13/03/2020 se activó el COE
              Nacional para la coordinación de la emergencia.
            </p>
            <p>
              Mediante Acuerdo Ministerial No 00126-2020 emitido el 11 de marzo de 2020 por la Ministra de Salud, se
              declara el Estado de Emergencia Sanitaria en el Sistema Nacional de Salud.
            </p>
          </Col>

          <Col xs={24} md={12} className='etiquetas'>
            <Tag color='processing'>Sin Riesgos</Tag>
            <Tag color='warning'>En Aumento de Riesgos</Tag>
            <Tag color='error'>Mucho Riesgos</Tag>
          </Col>
        </Row>
      </section>

      <div className='estatico'>
        <Row justify='center'>
          <Col xs={7} md={3}>
            <Statico label='Sierra' valor={10} />
            <ProgresoCircle porciento={40} />
          </Col>
          <Col xs={7} md={3}>
            <Statico label='Costa' valor={100} />
            <ProgresoCircle porciento={80} />
          </Col>
          <Col xs={7} md={3}>
            <Statico label='Oriente' valor={60} />
            <ProgresoCircle porciento={100} />
          </Col>
        </Row>
      </div>

      <div>MAPA ECUADOR</div>
      <svg height='100' width='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <path fill='red' style={{ backgroundColor: 'red' }} d='' />
      </svg>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='estadisticas_provincias'>
        <h2>Datos por Provincias</h2>

        <Row justify='center'>
          <Col xs={5} md={4}>
            <strong>Provincias:</strong>
          </Col>
          <Col xs={5} md={4}>
            <strong>Poblacion:</strong>
          </Col>
          <Col xs={5} md={4}>
            <strong>Infectados:</strong>
          </Col>
          <Col xs={5} md={4}>
            <strong>Progreso</strong>
          </Col>
        </Row>

        <div className='fila_estadistica'>
          {data.map(valor => (
            <Row justify='center'>
              <Col xs={5} md={4}>
                <span>{valor.provincia}</span>
              </Col>
              <Col xs={5} md={4}>
                <span>{valor.poblacion}</span>
              </Col>
              <Col xs={5} md={4}>
                <span>{valor.infectados}</span>
              </Col>
              <Col xs={5} md={4}>
                <ProgresoLine porcentaje={valor.progreso} />
              </Col>
            </Row>
          ))}
        </div>
      </div>

      <div className='busqueda'>
        <Row justify='center'>
          <Col xs={20} md={12}>
            <Busqueda />
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};
