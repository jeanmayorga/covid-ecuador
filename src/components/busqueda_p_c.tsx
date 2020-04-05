import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Input } from 'antd';
const { Search } = Input;

const item = [
    {label: 'Azuay'},
    {label: 'Bolívar'},
    {label: 'Cañar'},
    {label: 'Carchi'},
    {label: 'Chimborazo'},
    {label: 'Cotopaxi'},
    {label: 'El Oro'},
    {label: 'Esmeraldas'},
    {label: 'Galápagos'},
    {label: 'Guayas'},
    {label: 'Imbabura'},
    {label: 'Loja'},
    {label: 'Los Ríos'},
    {label: 'Manabí'},
    {label: 'Morona Santiago'},
    {label: 'Napo'},
    {label: 'Orellana'},
    {label: 'Pastaza'},
    {label: 'Pichincha'},
    {label: 'Santa Elena'},
    {label: 'Santo Domingo de los Tsáchilas'},
    {label: 'Sucumbíos'},
    {label: 'Tungurahua'},
    {label: 'Zamora Chinchipe'}
];


const Buscar = () => {
    return(
        <>
            <Search placeholder="Buscar por provicias, canton, parroquia" onSearch={value => console.log(value)} enterButton />
            <div className='etiquetas_detalles_p_c'>
              {item.map( valor => (
                  <Link to={`/provincia/${valor.label}`}>
                    <a>
                        <Tag id='tag' color="default">{valor.label}</Tag>
                    </a>
                  </Link>
              ))}
            </div>
        </>
    );
}

export default Buscar;
