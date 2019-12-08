import React from "react";
import "style/Footer.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

function Footer() {
  return (
    <footer>
      <div>kakaotalk</div>
      <div>kakaostory</div>
      <div>band</div>
      <FacebookShareButton url={"www.google.com"}>
        <FacebookIcon size={32} round={false} />
      </FacebookShareButton>
      <TwitterShareButton url={"www.google.com"}>
        <TwitterIcon size={32} round={false} />
      </TwitterShareButton>
    </footer>
  );
}

export default Footer;
