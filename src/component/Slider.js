import React from "react";
import Swiper from "react-id-swiper";
// import "style/swiper.css";
import "style/Slider.css";

const Slider = () => {
  const params = {
    spaceBetween: 300,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <Swiper {...params}>
      <div>
        <div>Slide #0</div>
      </div>
      <div>
        <div>Slide #1</div>
      </div>
      <div>
        <div>Slide #2</div>
      </div>
      <div>
        <div>Slide #3</div>
      </div>
      <div>
        <div>Slide #4</div>
      </div>
      <div>
        <div>Slide #5</div>
      </div>
      <div>
        <div>Slide #6</div>
      </div>
    </Swiper>
  );
};

export default Slider;
