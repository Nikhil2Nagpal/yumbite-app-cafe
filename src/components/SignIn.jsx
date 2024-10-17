import React from "react";
import "./sign.css"; // Make sure to create a CSS file for styling

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="left-content">
        <h2 className="text">Welcome to YumBite Cafe</h2>
        <p>
          At YumBite Cafe, we believe in bringing delightful experiences to our
          customers. Sign up to get exclusive access to our exciting offers and
          services.
        </p>
      </div>
      <div className="right-content">
        <h2>Sign Up</h2>
        <form className="sign-up-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" placeholder="Enter your mobile number" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
