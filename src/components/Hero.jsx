import "./hero.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={true}>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/01/99/10/44/240_F_199104456_hGSpXtSlQW4u2kk2YNUOzuvieua68wrf.jpg"
            alt="Slide 1"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/09/64/06/62/240_F_964066293_utAVHmQlU5nC1KYpvLP6SlpC19fKwHUF.jpg"
            alt="Slide 2"
            className="carousel-img"
          />
        </div>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/05/61/20/98/240_F_561209881_YuPHYG1cI9Cis2WUQDB6FXsSFyAYo1Ji.jpg"
            alt="Slide 3"
            className="carousel-img"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
