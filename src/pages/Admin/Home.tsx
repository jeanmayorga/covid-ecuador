import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

// tslint:disable-next-line: variable-name
export const AdminHome = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <h1>Logged Route</h1>
      <p>Hi, {user.user?.userId}</p>
    </>
  );
};
