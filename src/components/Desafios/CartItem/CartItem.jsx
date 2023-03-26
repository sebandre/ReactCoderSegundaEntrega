import React from 'react'
import { useCartContext } from '../../../context/CartContext';
import './CartItem.css';

export const CartItem = ({ item }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.imagen} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.title}</p>
                <p>Precio unitario: {item.precio}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.quantity * item.precio}</p>
                <button className='eliminar' onClick={() => removeProduct(item.id)}>Eliminar</button>    
            </div>
        </div>
    )
}
