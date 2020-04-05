import React from 'react';
import { Statistic } from 'antd';

interface Tipos {
  label: String;
  valor: any;
}

const Static = (props: Tipos) => {
  return (
    <>
      <Statistic title={props.label} value={props.valor} />
    </>
  );
};

export default Static;
