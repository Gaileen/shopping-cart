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
  getCartLength: () => {},
  changeQty: () => {},
  getTotal: () => {},
});

function App() {
  // List of items in cart.
  const [cart, setCart] = useState([]);
  // Custom hook to fetch products.
  const { products, loading } = useProducts();
   
  // +1
  const addToCart = (product) => {
    // Check if product type is alr in cart.
    const foundItem = cart.find(item => item.id === product.id);
    if (foundItem) {
      changeQty(product, foundItem.quantity + 1);
    } else {
      setCart(prevCart => {
        return [...prevCart, { ... product, quantity: 1}];
      });
    }
  };

  // -1
  const delFromCart = (product) => {
    if (product.quantity === 1) {
      setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    } else {
      changeQty(product, product.quantity - 1);
    }
  };

  // Set item qty according to usr input
  const changeQty = (product, usr_input) => {
    setCart((prevCart) => {
      return prevCart.map(item =>
        item.id === product.id
            ? { ...item, quantity: usr_input }
            : item
      );
    });
  };

  const getCartLength = () => {
    if (!cart) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Calcluate total price of cart.
  const getTotal = () => {
    return cart.reduce((total, item) => total + 
      (item.price * item.quantity), 0).toFixed(2); // 2 dec. places
  };


  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ShopContext.Provider value={{ products, cart, addToCart, 
          delFromCart, changeQty, getCartLength, getTotal }}>
        <Heading />
        <div className="content">
          <Outlet />
        </div>
      </ShopContext.Provider>
    </>
  )
}

export { App, ShopContext }
