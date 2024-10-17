import Delivery from "./Delivery";
import FoodSlider from "./Food-Slider";
import Hero from "./Hero";

function Home({ handleAddToCart }) {
  return (
    <>
      <Hero />
      <Delivery />
      <FoodSlider handleAddToCart={handleAddToCart} />
    </>
  );
}

export default Home;
