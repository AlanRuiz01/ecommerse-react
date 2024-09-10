/* eslint-disable react/prop-types */
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from 'react';

 
export default function Header({ cartItems }) {

  const [isCartVisible, setIsCartVisible] = useState(false); 

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold">AlanRuizStore</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <button>Home</button>
            <button>Productos</button>
            <button>Nosotros</button>
            <button>Contacto</button>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <input type="search" placeholder="Buscar..." className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" required />
            </div>
            <button size="icon">
              <Search className="h-6 w-6 md:hidden" />
            </button>
            <button size="icon"  onClick={toggleCart}>
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

          {isCartVisible && (
            <div className="fixed right-0 top-20 bg-white shadow-lg p-4 w-64">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>
            {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
            ) : (
            <ul>
            
              {cartItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>

  );
}
