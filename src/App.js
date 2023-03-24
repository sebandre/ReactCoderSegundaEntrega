import './App.css';
import React from 'react';
import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContainer } from './components/Desafios/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';






function App() {

  return(
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/productos/:categoriaId" element={<ItemListContainer />}/>
              <Route path="/item/:detalleId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
