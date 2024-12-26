import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component
import '../styles/CartPage.css'; // CartPage-specific CSS

const CartPage = () => {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  // Calculate total price considering quantity of each item
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * Number(item.price), 0);

  const handlePayment = () => {
    alert(`Proceeding to payment for ₹${totalPrice.toFixed(2)}`);
  };

  return (
    <>
      <Header scrolled={false} setSearchTerm={() => {}} />

      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ₹{Number(item.price).toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ₹{(item.quantity * Number(item.price)).toFixed(2)}</p>
                    <div className="cart-item-actions">
                      {/* Button to increase quantity */}
                      <button onClick={() => addToCart(item)}>+</button>
                      {/* Button to decrease quantity */}
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      {/* "Remove" button to completely remove item */}
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
              <button className="pay-button" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </>
        )}
        
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
