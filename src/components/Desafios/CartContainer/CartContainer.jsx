import { React, useState } from 'react';
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { useCartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import './CartContainer.css'
<script src="sweetalert2.all.min.js"></script>



export const CartContainer = () => {



  const {cart, totalPrice, clearCart} = useCartContext();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const compra = {
    comprador: { nombre, apellido, email, telefono,  direccion },
    items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity})),
    total: totalPrice(),
  
  
  }

   const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, compra);
    clearCart();
    <Link to='/'></Link>
    Swal.fire({
      title: 'Compra realizada con exito',
      text: 'Tu compra fue realizada con exito, te llegara un mail con los detalles. Gracias por tu compra',
      icon: 'success',
      confirmButtonText: 'Ok'
	}).then((result) => {
    if (result.value) {
      window.location.href = '/'
    }
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
      <p className='total'>
        Total: $ {totalPrice()}
      </p>  
      
      <form action="onSubmit">
        <label htmlFor="" className='total'>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          <br />
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
          <br />
          Telefono:
          <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
          <br />
          Email:   
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          Direccion:
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
        </label>
      </form>

   
   
  

      
      <button onClick={handleClick}>Finalizar compra</button>
      
    </>
  )
}
