import React from 'react';
import { useParams } from 'react-router-dom';

// tslint:disable-next-line: variable-name
export const Province = () => {
  const { provinceName } = useParams();

  return (
    <>
      <h1>Provincia {provinceName}</h1>
    </>
  );
};
