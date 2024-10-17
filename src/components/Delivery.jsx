import "./Delivery.css";
function Delivery() {
  return (
    <div className="delivery-header">
      <h3 className="delivery-header-name">Quick Delivery App</h3>
      <div className="delivery-middle">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFPwHHl2dJ1xgzLdrtU29_Cg9CDeKhwO9pQ&s"
          alt="delievry-app"
          className="img-food-delivery"
        />
        <div className="app-status">
          <h2 className="delivery-app">Get The App</h2>
          <p className="fast-delivery-para">
            The Fastest Food <span>Delivery In India</span>
          </p>
          <button className="delivery-btn">Order now</button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
