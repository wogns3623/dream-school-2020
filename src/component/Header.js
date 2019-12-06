import React, { Component } from "react";
import homeBtn from "assets/images/common/home_btn.png";
import menuBtn from "assets/images/common/menu_btn.png";
import closeBtn from "assets/images/common/menu_btn2.png";
import "style/Header.css";

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
        <div className="header_logo">header_logo</div>
        <div className="header_sns">header_sns</div>
        <div className={`header_menu${this.state.menuActive ? " active" : ""}`}>
          <img
            className="btn closeBtn"
            src={closeBtn}
            alt="menu close button"
            onClick={() => this.handleMenu(false)}
          ></img>
          header_menu
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
            width="40px"
            onClick={() => this.handleMenu(true)}
          ></img>
        </div>
      </header>
    );
  }
}

export default Header;
