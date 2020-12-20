import React, { Component } from "react";
import Swiper from "react-id-swiper";
import Tel from "component/Tel";

import pageImg1 from "assets/images/page/main_with.jpg";
// import pageImg1 from "assets/images/page/main.jpg";
import pageImg2 from "assets/images/page/info.jpg";
import pageImg3 from "assets/images/page/qna1.jpg";
import pageImg4 from "assets/images/page/qna2.jpg";
import pageImg5 from "assets/images/page/apptip.jpg";
import pageImg6 from "assets/images/page/explain.jpg";
import pageImg7 from "assets/images/page/tel.jpg";
import btnImg1 from "assets/images/page/app_.png";
import btnImg2 from "assets/images/page/tip_.png";

import "style/Slider.css";
import "style/SlideItem.css";

class Slider extends Component {
  params = {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    let sliderWidth = { width: window.innerWidt };
    return (
      <Swiper
        {...this.params}
        getSwiper={(swiper) => {
          this.props.setSwiper(swiper);
        }}
      >
        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg1} alt="slide first page" />
            <div className="btn_wrap">
              <a href="https://village.goe.go.kr/board/notice/view/1214">
                <img src={btnImg1} alt="꿈의학교 신청" />
              </a>

              <img
                src={btnImg2}
                alt="신청서 작성 팁"
                onClick={() => this.props.handleTab(4)}
              />
            </div>
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg2} alt="slide second page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg3} alt="slide third page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg4} alt="slide fourth page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg5} alt="slide fifth page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg6} alt="slide sixth page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg7} alt="slide seventh page" />

            <div className="content_wrap">
              <Tel />
            </div>
          </div>
        </div>
      </Swiper>
    );
  }
}

export default Slider;
