import meals from "../DataTwo/datatwo";
import "./food-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function FoodSlider({ handleAddToCart }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="food-slider-header">
        <h1 className="order-food">What's on your mind?</h1>
        <div>
          <Slider {...settings}>
            {meals.map((item) => (
              <div key={item.id}>
                {" "}
                {/* Add a key here */}
                <img src={item.img} alt="food-img" className="food-img" />
                <p className="food-title">{item.name}</p>
                <p className="food-title">{item.price}</p>
                <button
                  className="delivery-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FoodSlider;
