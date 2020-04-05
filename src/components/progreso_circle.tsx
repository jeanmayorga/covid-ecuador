import React from 'react';
import { Progress } from 'antd';

interface Tipos {
  porciento: Number | any;
}

const Progreso = (props: Tipos) => {
  return (
    <>
      <Progress
        type='circle'
        percent={props.porciento}
        width={70}
        status={props.porciento >= 100 ? 'exception' : 'normal'}
      />
    </>
  );
};

export default Progreso;
