import React from "react";
import "./About.css"; // Include your CSS file

function About() {
  return (
    <div className="about-section">
      <h1 className="about-head">About Our Journey</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            We started with a vision to bring the best services to our
            customers, making lives easier and faster. The team at YumBite Cafe
            is dedicated to offering quick and efficient solutions tailored to
            your needs.
          </p>
          <p>
            Over the years, YumBite Cafe has expanded to reach millions of
            users, delivering quality experiences and innovative approaches in
            the market.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXahImQAX_cK6LJR0nbFEjturdZ6ruXql9xg&s"
            alt="About us"
          />
        </div>
      </div>

      <div className="additional-content">
        <div className="additional-image">
          <img
            src="https://thescorerkollam.com/wp-content/uploads/2021/06/about-img.png"
            alt="Our values"
          />
        </div>
        <div className="additional-text">
          <p>
            Our team at YumBite Cafe believes in staying ahead of the curve,
            constantly innovating to provide cutting-edge solutions to our
            clients. We believe in quality, commitment, and delivering
            excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
