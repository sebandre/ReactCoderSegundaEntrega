import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    ///Agrega al carrito
    const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};
    
    ///Limpiar Carrito
    const clearCart =() => setCart([]);

    ///Verifica si un producto esta en el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true: false;
    
    ///Eliminar un producto
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    ///Precio total
    const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

    ///Cantidad total de productos
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador+ productoActual.quantity, 0);






        

    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}    
        </CartContext.Provider>    

    )
}
