import meals from "../DataTwo/datatwo";
import "./food-sec.css";
function FoodSec({ handleAddToCart }) {
  return (
    <div className="food-sec">
      <h1 className="food-sec-head">Order Food</h1>
      <div className="meal-container">
        {meals.map((meal) => (
          <div className="meal-card" key={meal.id}>
            <img src={meal.img} alt={meal.name} className="meal-img" />
            <p className="meal-name">{meal.name}</p>
            <p className="meal-name">{meal.price}</p>
            <button className="meal-btn" onClick={() => handleAddToCart(meal)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSec;
