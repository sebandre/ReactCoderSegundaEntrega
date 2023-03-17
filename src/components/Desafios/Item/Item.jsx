import './Item.css';
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useCartContext } from '../../../context/CartContext';

export const Item = ({info})=>{
    const nombre = useContext(useCartContext);
    console.log('Item ', nombre);
    return(
        <div className="tarjeta-producto">
            <img src={info.imagen} alt={info.nombre}/>
            <h4>{info.nombre}</h4>
            <p>$ {info.precio}</p>
            <Link to={`/item/${info.id}`}>
               <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}