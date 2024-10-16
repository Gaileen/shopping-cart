import '../index.css'
import Heading from './Heading'
import { useProducts } from "./FetchProducts";
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  delFromCart: () => {},
});

function App() {
   // List of items in cart.
   const [cart, setCart] = useState([]);
   // Custom hook to fetch products.
   const { products, loading } = useProducts();

   const addToCart = (product) => {
       setCart((prevCart) => [...prevCart, product]);
   };

   const delFromCart = (id) => {
       setCart((prevCart) => prevCart.filter(prod => prod.id !== id));
   };


  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ShopContext.Provider value={{ products, cart, addToCart, delFromCart }}>
        <Heading />
        <div className="content">
          <Outlet />
        </div>
      </ShopContext.Provider>
    </>
  )
}

export { App, ShopContext }
