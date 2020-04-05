import React, { useState, useEffect } from 'react';
import Busqueda from '../components/busqueda_p_c';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import Footer from '../components/footer';
import "../less/datos.less";

const  Datos = () => {

    useEffect(() => {
        console.log('ok');
      });

let { palabra } = useParams();

    return(
        <>
            <Row justify='center'>
                <Col>
                    <h2 className='subtitulo'>{palabra}</h2>
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
}

export default Datos;