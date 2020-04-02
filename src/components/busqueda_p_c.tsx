import React from 'react';
import { Tag, Input } from 'antd';
const { Search } = Input;

const item = [
    {label: 'Los Rios', url:''},
    {label: 'Manibi', url:''},
    {label: 'Baños', url:''},
    {label: 'Duran', url:''},
    {label: 'Babahoyo', url:''},
    {label: 'Guayaquil', url:''},
    {label: 'Guayas', url:''},
    {label: 'El oro', url:''},
];

const Buscar = () => {
    return(
        <>
            <Search placeholder="Buscar por provicias, canton, parroquia" onSearch={value => console.log(value)} enterButton />
            <div className='etiquetas_detalles_p_c'>
              {item.map( valor => (
                  <Tag color="default">{valor.label}</Tag>
              ))}
            </div>
        </>
    );
}

export default Buscar;