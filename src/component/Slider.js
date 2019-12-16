import React, { Component } from "react";
import Swiper from "react-id-swiper";
import QnA from "component/QnA";
import Tel from "component/Tel";
import pageBg from "assets/images/page/page_bg.png";
import pageImg1 from "assets/images/page/main.png";
import pageImg2 from "assets/images/page/info.png";
import pageImg4 from "assets/images/page/application.png";
import pageImg5 from "assets/images/page/apptip.png";
import pageImg6 from "assets/images/page/explain.png";
import pageImg7 from "assets/images/page/tel.png";
import btnImg1 from "assets/images/page/app_.png";
import btnImg2 from "assets/images/page/tip_.png";
import btnImg3 from "assets/images/page/enter_.png";
import logo from "assets/images/common/2019_main_logo2.png";
import "style/Slider.css";
import "style/SlideItem.css";

class Slider extends Component {
  params = {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    let sliderWidth = { width: window.innerWidt };
    return (
      <Swiper
        {...this.params}
        getSwiper={swiper => {
          this.props.setSwiper(swiper);
        }}
      >
        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg1} alt="slide first page" />
            <div className="btn_wrap">
              <a href="https://village.goe.go.kr/school/announcement/view/16">
                <img src={btnImg1} />
              </a>
              <img src={btnImg2} onClick={() => this.props.handleTab(4)} />
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
            <img className="bgImg" src={pageBg} alt="slide second page" />

            <div className="content_wrap">
              <QnA></QnA>
            </div>
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img className="bgImg" src={pageImg4} alt="slide fourth page" />

            <img className="btn slideBtn" src={btnImg1} />
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

            <img className="btn slideBtn" src={btnImg3} />
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
