import React from 'react';
import { addDoc, getFirestore, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link, Routes } from 'react-router-dom';
import Swal from 'sweetalert2'

<script src="sweetalert2.all.min.js"></script>


export const CartContainer = () => {
  const {cart, totalPrice} = useCartContext();

  const compra = {
    comprador:{
      nombre: 'seba',
      email: 'seba@seba.com',
      telefono: 'seba1234',
      direccion: 'seba1232'
    },
    items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity})),
    total: totalPrice(),
  }

   const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, compra);
    Swal.fire({
      title: 'Compra realizada con exito',
      text: 'Tu compra fue realizada con exito y se enviara a la direccion ingresada',
      icon: 'success',
      confirmButtonText: 'Ok'

	});
  
   }
  if (cart.length === 0){
    return (
      <>
        <p>No hay elementos agregados al carrito</p>
        <Link to='/'> Continuar Comprando</Link>
      </>
    );
  }
  return (
    <>
      {
        cart.map(item => <CartItem key={item.id} item={item}/>)
      }
      <p>
        Total: $ {totalPrice()}
      </p>  
      
      <button onClick={handleClick}>Comprar</button>
      
    </>
  )
}
