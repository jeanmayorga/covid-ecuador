import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

import '../../less/Admin/Loading.less';
import { RootState } from '../../store';

export function Loading() {
  const isLoading = useSelector((state: RootState) => state.isLoading);

  return (
    <div className={`Loading ${isLoading ? 'active' : 'out fadeOut animated'}`}>
      <div className='LoadingLayout'>
        <div>
          <Spin size='large' />
        </div>
      </div>
    </div>
  );
}
