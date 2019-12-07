import React, { Component } from "react";
import Header from "component/Header";
import Footer from "component/Footer";
import Slider from "component/Slider";
import swipeBtnLeft from "assets/images/common/arrow_left.png";
import swipeBtnRight from "assets/images/common/arrow_right.png";
import "style/App.css";

class App extends Component {
  state = {
    isMobile: false,
    currentTab: 0,
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

    window.addEventListener("resize", this.resize.bind(this));
  }

  componentDidMount() {
    this.resize();
  }

  resize() {
    let currentIsMobile = window.innerWidth < 880;
    if (currentIsMobile !== this.state.isMobile) {
      console.log("resize event\n currentIsMobile is ", currentIsMobile);
      this.setState({ isMobile: currentIsMobile });
    }
  }

  handleTab = index => {
    if (this.state.tabList.length > index && index >= 0) {
      console.log(index);
      this.setState({
        currentTab: index
      });
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
        <main className={"App"} onClick={() => console.log("click")}>
          <Slider></Slider>
        </main>
        <Footer isMobile={this.state.isMobile}></Footer>
      </>
    );
  }
}

export default App;
