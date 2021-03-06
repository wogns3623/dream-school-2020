import React, { Component } from "react";

import ShareBox from "component/ShareBox.js";
import homeBtn from "assets/images/common/home_btn.png";
import menuBtn from "assets/images/common/menu_btn.png";
import closeBtn from "assets/images/common/menu_btn2.png";
import logo from "assets/images/common/logo.png";
import "style/Header.css";
import btnImg1 from "assets/images/page/app_.png";

class Header extends Component {
  state = {
    menuActive: false,
  };

  handleMenu = (value) => {
    if (this.props.isMobile) {
      this.setState({ menuActive: value });
    }
  };
  render() {
    return (
      <header>
        <div className="header_logo">
          <img
            className="btn homeBtn"
            src={logo}
            alt="home button"
            width="150px"
            onClick={() => this.props.handleTab(0)}
          ></img>
          <div>
            <a
              className="apply_w"
              href="https://village.goe.go.kr/board/notice/view/1214"
            >
              <img src={btnImg1} alt="꿈의학교 신청" />
            </a>
          </div>
        </div>
        <div className="header_sns">
          <ShareBox
            isMobile={this.props.isMobile}
            iconWidth="30px"
            kakao="header"
          ></ShareBox>
        </div>
        <div className={`header_menu${this.state.menuActive ? " active" : ""}`}>
          <img
            className="btn closeBtn"
            src={closeBtn}
            alt="menu close button"
            onClick={() => this.handleMenu(false)}
          ></img>
          <div className="menu_wrap">
            {this.props.menuList.map((item, index) => (
              <div
                className={`menu_item${
                  this.props.currentTab === index ? " active" : ""
                }`}
                onClick={() => {
                  this.handleMenu(false);
                  this.props.handleTab(index);
                }}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mobMenuBg${this.state.menuActive ? " active" : ""}`}
          onClick={() => this.handleMenu(false)}
        ></div>

        <div className="header_mobile">
          <img
            className="btn homeBtn"
            src={homeBtn}
            alt="home button"
            width="40px"
            onClick={() => this.props.handleTab(0)}
          ></img>
          <a
            className="apply"
            href="https://village.goe.go.kr/board/notice/view/1214"
          >
            <img src={btnImg1} alt="꿈의학교 신청" />
          </a>
          <img
            className="btn menuBtn"
            src={menuBtn}
            alt="menu button"
            width="44px"
            onClick={() => this.handleMenu(true)}
          ></img>
        </div>
      </header>
    );
  }
}

export default Header;
