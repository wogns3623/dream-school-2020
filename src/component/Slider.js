import React, { Component } from "react";
import Swiper from "react-id-swiper";
// import "style/swiper.css";
import "style/Slider.css";

class Slider extends Component {
  params = {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Swiper
        {...this.params}
        getSwiper={swiper => {
          this.props.setSwiper(swiper);
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index} style={{ width: window.innerWidth }}>
            <div>Slide #{index}</div>
          </div>
        ))}
      </Swiper>
    );
  }
}

export default Slider;
