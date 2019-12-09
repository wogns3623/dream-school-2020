import React, { Component } from "react";
import homeBtn from "assets/images/common/home_btn.png";
import menuBtn from "assets/images/common/menu_btn.png";
import closeBtn from "assets/images/common/menu_btn2.png";
import logo from "assets/images/common/logo.png";
import "style/Header.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
// import { KaKaoTalkButton, FacebookCount } from "react-social-kr";

import ShareBox from "component/ShareBox.js";

class Header extends Component {
  state = {
    menuActive: false
  };

  handleMenu = value => {
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
            width="100px"
            onClick={() => this.props.handleTab(0)}
          ></img>
        </div>
        <div className="header_sns">
          <FacebookShareButton url={"www.google.com"}>
            <FacebookIcon size={32} round={false} />
          </FacebookShareButton>
          <TwitterShareButton url={"www.google.com"}>
            <TwitterIcon size={32} round={false} />
          </TwitterShareButton>

          <ShareBox></ShareBox>
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
