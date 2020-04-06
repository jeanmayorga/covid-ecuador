import React, { useState, useEffect } from 'react';
import Busqueda from '../components/busqueda_p_c';
import { format } from 'date-fns';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import Footer from '../components/footer';
import '../less/datos.less';

const datos = {
  labels: [format(new Date(2020, 1,11),'d MMMM YYY' ), 'Martes 13', 'Miercoles 14', 'Jueves 15', 'Viernes 16', 'Sabado 17', 'Domingo 18'],
  datasets: [
    {
      label: 'Infectados en Marzo',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};


const Datos = () => {
  useEffect(() => {
    console.log('ok');
  });

  const { palabra } = useParams();

  return (
    <>
      <Row justify='center'>
        <Col>
          <h2 className='subtitulo'>{palabra}</h2>
        </Col>
      </Row>

      <Row justify='center'>
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

      <Footer />
    </>
  );
};

export default Datos;
