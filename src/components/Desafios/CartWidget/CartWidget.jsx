import Carrito from '../../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                productCartList.length>0 &&
                <>
                    <Link to="/cart">
                        <img src={Carrito} alt="carrito" style={{width:30}}/>
                    </Link>
                    <span style={{backgroundColor: 'white', borderRadius:"80%", width:"20px", heigth:"10px", fontSize:"12px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
}