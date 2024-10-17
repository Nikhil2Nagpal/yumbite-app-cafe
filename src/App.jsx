import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FoodSec from "./components/Food-Sec";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";
import CartDisplay from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (foodItem) => {
    const existingItem = cartItems.find((item) => item.id === foodItem.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...foodItem, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/foodsec" element={<FoodSec handleAddToCart={handleAddToCart} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<CartDisplay cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
