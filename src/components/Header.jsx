import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ cartItems }) {
  // Calculate total items in the cart by summing up the quantity of each item
  const totalItems =
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className="hero">
      <div>
        <p className="logo">
          Yum<span className="span-word">Bite</span>
        </p>
      </div>
      <div>
        <ul className="li">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/foodsec">Food Section</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to='/cart'>
          <p className="cart">
            {totalItems}{" "}
            {/* This will show the total number of items in the cart */}
            <FaShoppingCart size={30} />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
