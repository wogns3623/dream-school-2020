import React, { Component } from "react";
import Header from "component/Header";
import Footer from "component/Footer";
import Slider from "component/Slider";
import "style/App.css";

class App extends Component {
  state = {
    isMobile: false,
    currentTab: 0,
    swiper: null,
    tabList: [
      "HOME",
      "꿈의학교란?",
      "꿈의학교 Q&A",
      "신청 및 심사일정",
      "신청서 작성팁",
      "사업설명회 일정",
      "지역교육청 연락처"
    ]
  };

  constructor() {
    super();

    window.Kakao.init("b356a2e405bb3aa3e99097c3753002aa");
    window.addEventListener("resize", this.resize.bind(this));
  }

  componentDidMount() {
    this.resize();
  }

  resize() {
    let currentIsMobile = window.innerWidth < 880;
    if (currentIsMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentIsMobile });
    }
  }
  setSwiper = swiper => {
    swiper.on("slideChange", () => {
      window.scrollTo(0, 0);
      this.setState({ currentTab: this.state.swiper.activeIndex });
    });
    this.setState({ swiper: swiper });
  };

  handleTab = index => {
    if (this.state.swiper !== null) {
      this.state.swiper.slideTo(index);
    }
  };

  render() {
    return (
      <>
        <Header
          isMobile={this.state.isMobile}
          handleTab={this.handleTab}
          currentTab={this.state.currentTab}
          menuList={this.state.tabList}
        ></Header>
        <main className="App">
          <Slider setSwiper={this.setSwiper}></Slider>
        </main>
        <Footer isMobile={this.state.isMobile}></Footer>
      </>
    );
  }
}

export default App;
