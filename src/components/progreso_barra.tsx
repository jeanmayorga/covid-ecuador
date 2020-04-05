import React from 'react';
import { Progress } from 'antd';

interface Tipos {
  porcentaje: Number | any;
}

const ProgresoLine = (props: Tipos) => {
  return (
    <>
      <Progress percent={props.porcentaje} status='exception' />
    </>
  );
};

export default ProgresoLine;
