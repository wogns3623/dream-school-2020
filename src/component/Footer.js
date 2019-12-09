import React, { Component } from "react";

import ShareBox from "component/ShareBox.js";
import "style/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ShareBox
          isMobile={this.props.isMobile}
          iconWidth="40px"
          kakao="footer"
        ></ShareBox>
      </footer>
    );
  }
}

export default Footer;
