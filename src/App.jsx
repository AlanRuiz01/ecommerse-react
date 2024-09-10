import { useState } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [cartItems, setCartItems] = useState([]); // Estado del carrito

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <MainContent addToCart={addToCart}/>
      <Footer />
    </>
  )
}

export default App
