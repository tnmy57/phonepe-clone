import React from "react";
import "./style.css";

const Carousel = ({ data }) => {
  return (
    <div id="main">
      {data.slides.map((imgItem, ind) => {
        return (
          <div className="cover">
            <div className="banner">
              <div className="top"><p>2%</p><h1>FREE</h1></div>
              <p id="pa">Accept payment for your online business at zero cost</p>
              <p id="pb">Sign up PhonePe Payment Gateway</p>
              <button>Get Started</button>
            </div>
            <img
              src={imgItem.src}
              alt={imgItem.alt}
              key={ind}
              className="images"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
