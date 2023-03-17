import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';





export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
    return(
        <div className='detail-container'>
            <div className='img-container'>
                <img src={data.imagen} alt={data.nombre}/>
            </div>
            <div className='img-container'>
                <h4>{data.nombre}</h4>
                <h5>$ {data.precio}</h5>
                {
                    goToCart
                        ? <Link to="/cart">Finalizar Compra</Link>
                        : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                }
            </div>
        </div>
    )
}
