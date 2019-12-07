import React, { Component } from "react";
import Swiper from "react-id-swiper";
import pageImg1 from "assets/images/page/01.jpg";
import pageImg2 from "assets/images/page/02.jpg";
import pageImg3_top from "assets/images/page/03_top.jpg";
// import pageImg3_side from "assets/images/page/03_side.jpg";
import pageImg3_bottom from "assets/images/page/03_bottom.jpg";
import pageImg4 from "assets/images/page/04.jpg";
import pageImg5_top from "assets/images/page/05_top.jpg";
import pageImg6_top from "assets/images/page/06_top.jpg";
import btnImg1 from "assets/images/page/2019_main_new_btn01.gif";
import btnImg2 from "assets/images/page/2019_main_new_btn02.gif";
import btnImg3 from "assets/images/page/2019_main_new_btn03.gif";
import qnaData from "assets/data/qnaData.json";
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
  state = {
    activeQ: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.activeQ !== nextState.activeQ) {
      if (this.state.activeQ !== null) {
        let prevA = document.getElementsByClassName("A")[this.state.activeQ];
        prevA.style.height = "0px";
      }
      if (nextState.activeQ !== null) {
        let nextA = document.getElementsByClassName("A")[nextState.activeQ];
        nextA.style.height = nextA.children[0].clientHeight + 40 + "px";
      }

      return true;
    } else {
      return false;
    }
  }

  handleQna = index => {
    if (index === this.state.activeQ) {
      this.setState({ activeQ: null });
    } else {
      this.setState({ activeQ: index });
    }
  };

  render() {
    return (
      <Swiper
        {...this.params}
        getSwiper={swiper => {
          this.props.setSwiper(swiper);
        }}
      >
        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg1} alt="slide first page" />
            <div className="bottom_page"></div>
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg2} alt="slide second page" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <h2>학생이 만들어가는 꿈의 학교</h2>
            <section className="qna_container">
              {qnaData.map((item, index) => {
                return (
                  <div className="qna_content">
                    <div className="Q" onClick={() => this.handleQna(index)}>
                      {item.q}
                    </div>
                    <div
                      className={`A${
                        this.state.activeQ === index ? " active" : ""
                      }`}
                    >
                      <ul>
                        {item.a.map((item, index) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg3_top} alt="slide fourth page content" />
            <div className="btn_wrap">
              <img
                className="btn applyBtn"
                src={btnImg1}
                alt="slide third page button"
              />
            </div>
            <img src={pageImg3_bottom} alt="slide fourth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg4} alt="slide fifth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg5_top} alt="slide sixth page content" />
            <div className="btn_wrap">
              <img
                className="btn applyBtn"
                src={btnImg3}
                alt="slide third page button"
              />
            </div>
            <img src={pageImg3_bottom} alt="slide sixth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div></div>
        </div>
      </Swiper>
    );
  }
}

export default Slider;
