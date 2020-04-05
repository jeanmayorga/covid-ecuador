import React, { ReactNode } from 'react';

import { Loading } from './Loading';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className='Layout'>
      <Loading />
      {children}
    </div>
  );
}
