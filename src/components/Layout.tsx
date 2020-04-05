import React, { ReactNode } from 'react';

import '../less/Admin/Admin.less';
import '../less/App.less';

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
