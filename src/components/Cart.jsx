import React from "react";
import "./cart.css"; // Ensure to import the CSS file

const CartDisplay = ({ cartItems, setCartItems }) => {
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseInt(item.price.replace("₹", "")) * Number(item.quantity),
      0
    );
  };

  // Log cart items to debug
  console.log("Cart Items:", cartItems);
  cartItems.forEach((item) => {
    console.log(
      `Title: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Type of Price: ${typeof item.price}`
    );
  });

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} - ₹{parseInt(item.price.replace("₹", "")).toFixed(2)} x{" "}
                  {Number(item.quantity)}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
          <button className="order-now-button">Order Now</button>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
