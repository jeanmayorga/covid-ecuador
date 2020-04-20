import { CheckCircleOutlined, DingtalkOutlined, TeamOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
// import { Line } from 'react-chartjs-2';

// import Busqueda from '../components/busqueda_p_c';
// import Footer from '../components/footer';
import { Map } from '../components/Map';
// import ProgresoLine from '../components/progreso_barra';
// import ProgresoCircle from '../components/progreso_circle';
// import Statico from '../components/static';
import '../less/home.less';

// const data = [
//   {
//     key: '1',
//     provincia: 'Manabi',
//     poblacion: 10292,
//     infectados: 932,
//     progreso: 12,
//   },
//   {
//     key: '2',
//     provincia: 'Los Rios',
//     poblacion: 10292,
//     infectados: 932,
//     progreso: 47,
//   },
//   {
//     key: '3',
//     provincia: 'Azuay',
//     poblacion: 10292,
//     infectados: 932,
//     progreso: 60,
//   },
// ];

// const datos = {
//   labels: ['Lunes 12', 'Martes 13', 'Miercoles 14', 'Jueves 15', 'Viernes 16', 'Sabado 17', 'Domingo 18'],
//   datasets: [
//     {
//       label: 'Infectados en Marzo',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

// tslint:disable-next-line: variable-name
export const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='videoBackground'>
          <iframe
            frameBorder='0'
            allowFullScreen={true}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            title='YouTube video player'
            src='https://www.youtube.com/embed/d2HuksR_iqc?version=3&autoplay=1&playlist=sHxOcXj7rLE&mute=1&loop=1&controls=0&playsinline=1&enablejsapi=1&widgetid=1'></iframe>
        </div>
        <div className='landing'>
          <div className='flexCenter'>
            <img src='https://image.flaticon.com/icons/svg/330/330581.svg' alt='' />
          </div>
          <div className='flexCenter'>
            <span className='title'>SITUACIÓN NACIONAL</span>
          </div>
          <div className='flexCenter'>
            <div className='covidwire'>COVID-19</div>
          </div>
          <div className='flexCenter'>
            <div className='dateLatest'>ÚLTIMA ACTUALIZACIÓN: 18 DE ABRIL 2020 10:50 p.m.</div>
          </div>
          <div className='flexCenter'>
            <Row gutter={10} className='bubbles'>
              <Col span={8} className='confirmedColor'>
                <div className='bubble'>
                  <TeamOutlined />
                  9,468
                </div>
                <div className='subtitle'>CASOS CONFIRMADOS</div>
              </Col>
              <Col span={8} className='healthedColor'>
                <div className='bubble'>
                  <CheckCircleOutlined />
                  1,061
                </div>
                <div className='subtitle'>CASOS CON ALTA HOSPITALARIA</div>
              </Col>
              <Col span={8} className='deadColor'>
                <div className='bubble'>
                  <DingtalkOutlined />
                  474
                </div>
                <div className='subtitle'>PERSONAS FALLECIDAS</div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className='map'>
        <div>
          <div className='title'>Cases in Ecuador</div>
          <Map />
        </div>
      </section>
      {/* <section>
        <Row justify='center'>
          <Col xs={24} md={14}>
            <h1>
              ECUADOR &nbsp; <img src='https://image.flaticon.com/icons/svg/330/330581.svg' alt='' /> &nbsp; lucha
              contra el Covid-19
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
      <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='red'
          style={{ backgroundColor: 'red' }}
          d=''
          path='m238.93 630.42l-1.68 2.29l-7.36 1.28l-6.33 -1.56l0.37 -17.69l5.31 -11.55l15.27 -6.14l4.66 0.18l6.98 4.22l4.38 1.10l-2.51 3.67l-5.12 2.11l-4.66 6.69l-4.19 8.06l-3.07 2.11l-2.05 5.22zm28.68 -36.01l-4.47 1.37l-0.47 -2.29l3.54 -9.16l2.79 -4.86l4.75 5.59l-2.14 3.21l-3.54 1.83l-0.47 4.31zm-6.42 40.78l2.14 -4.03l-1.02 -1.74l5.12 -17.96l3.35 -6.60l2.61 -8.06l4.19 -4.77l1.02 -4.12l-2.33 -8.52l-5.49 -2.20l-3.82 -8.52l-0.74 -13.10l0.74 -3.57l-2.89 -6.05l0.65 -4.03l4.47 -2.75l1.21 -3.48l4.10 -4.03l-6.70 3.85l-0.28 2.66l-4.84 1.37l-1.86 7.15l0.47 5.77l3.07 5.22l0.28 3.02l-1.68 19.43l-1.02 4.03l-3.54 4.12l-6.15 3.12l-6.05 -1.56l-2.51 -2.93l4.38 -3.48l1.40 -3.57l3.72 -1.19l4.19 1.56l-4.47 -3.57l-5.77 1.65l-0.09 -3.57l2.70 -7.88l3.17 -1.10l2.89 -4.03l-8.47 3.94l-4.38 11.09l-10.06 12.83l-6.80 4.12l-2.89 -2.38l-0.93 4.40l3.07 3.12l0.37 4.03l-3.35 0.64l-4.28 -1.65l-7.73 -6.14l-7.26 -3.12l-7.64 -8.71l7.36 -6.87l6.05 -4.40l8.75 -2.11l4.93 -2.75l4.56 -6.78l1.58 -10.08l0.28 -8.80l-3.91 -5.86l-9.68 -6.87l-8.01 -1.92l-5.31 -3.12l-2.89 -4.67l-0.93 -4.31l7.17 -0.18l2.05 -4.95l3.72 -5.22l6.89 -5.32l2.14 1.37l8.47 -2.66l-1.21 -5.50l-4.00 -2.02l-1.58 -2.75l6.24 -0.82l3.91 -3.76l-1.86 -4.03l1.68 -5.68l4.93 -2.11l1.30 -6.78l8.19 -6.23l5.12 -14.20l5.68 1.37l8.57 -5.41l5.59 -7.42l0.37 -3.02l7.36 -10.17l3.91 -2.02l6.52 -1.01l8.57 -1.28l1.86 2.29l-2.05 7.61l0.47 2.29l-2.89 2.66l-1.49 5.32l-3.91 2.57l-7.36 8.06l-5.21 3.76l-1.02 5.04l-5.68 10.45l-4.47 5.86l-1.58 4.49l-0.74 7.42l1.49 5.41l0.00 6.69l8.38 4.22l6.80 10.45l5.77 11.82l5.77 -0.09l5.21 -1.92l4.00 0.09l10.15 5.96l4.19 3.57l7.64 12.37l5.12 4.67l10.99 0.82l-0.28 4.12l-2.51 3.94l-8.10 3.85l-12.01 2.11l-7.45 5.68l0.09 6.05l-9.12 7.33l2.51 2.20l5.31 -2.02l2.05 3.67l-5.59 6.32l-22.25 22.63l-1.30 4.95l0.84 8.16l-5.49 6.60l-1.12 4.12l-5.21 -1.47l-8.57 -0.46z'
        />
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
      </div> */}

      {/* <Row justify='center'>
        <Col>
          <Line data={datos} width={2000} height={300} options={{ maintainAspectRatio: false }} />
        </Col>
      </Row>

      <div className='busqueda'>
        <Row justify='center'>
          <Col xs={20} md={12}>
            <Busqueda />
          </Col>
        </Row>
      </div>

      <Footer /> */}
    </>
  );
};
