import Carrito from '../../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';

export const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
			<Link to="/cart">
                <img src={Carrito} alt="carrito" style={{width:30}}/>
            </Link>
			<span>{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;
