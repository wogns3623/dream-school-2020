import React, { Component } from "react";

import facebookImg from "assets/images/sns/facebook.jpg";
import twitterImg from "assets/images/sns/twitter.jpg";
import bandImg from "assets/images/sns/band.jpg";
import kakaoImg from "assets/images/sns/kakao.jpg";
import kakaostoryImg from "assets/images/sns/kakaostory.jpg";
import "style/ShareBox.css";

class ShareBox extends Component {
  state = { url: "http://dreamschool2020.cafe24.com" };
  componentDidMount() {
    window.Kakao.Link.createDefaultButton({
      container: "#kakao_" + this.props.kakao,
      objectType: "feed",
      content: {
        title: "2020 학생이 만들어가는 꿈의학교",
        imageUrl: "http://wzine.kr/dreamschool2019/images/sns/kakao_img.png",
        link: {
          mobileWebUrl: this.state.url,
          webUrl: this.state.url
        }
      }
    });
  }

  sns = type => {
    let snsTitle = encodeURI("2020 학생이 만들어가는 꿈의학교");
    let snsUrl = this.state.url;
    let snsCopy = encodeURI("2020 학생이 만들어가는 꿈의학교");
    let opensns = "";

    if (type === "facebook") {
      opensns += "http://www.facebook.com/sharer.php?u=" + snsUrl;
      opensns += "&t=" + snsTitle;
      this.openSnsWin(opensns);
    } else if (type === "band") {
      opensns += '"' + snsTitle + '":' + snsUrl;
      opensns += "&new_post[tags]=" + snsCopy;
      this.openSnsWin(
        "http://www.band.us/plugin/share?body=" +
          opensns +
          "&route=wzine.kr/dreamschool2019"
      );
    } else if (type === "kakaostory") {
      opensns += "https://story.kakao.com/share?url=" + snsUrl;
      this.openSnsWin(opensns);
    } else if (type === "twitter") {
      opensns += "http://twitter.com/share?text=" + snsTitle + "&url=" + snsUrl;
      this.openSnsWin(opensns);
    }
  };

  openSnsWin = opensns => {
    window.open(
      opensns,
      "",
      "width=560, height=520, scrollbars=yes, resizable=yes"
    );
  };

  render() {
    // let band = [
    //   `https://band.us/plugin/share?body=2020 꿈의 학교&route=${this.state.url}`,
    //   `bandapp://create/post?text=2020 꿈의 학교&route=${this.state.url}`
    // ];
    return (
      <div className="sns_wrap">
        <div
          id={"kakao_" + this.props.kakao}
          className={"btn" + (this.props.isMobile ? "" : " deactive")}
        >
          <img src={kakaoImg} alt="kakao share" width={this.props.iconWidth} />
        </div>
        <div
          id="kakaostory"
          className="btn"
          onClick={() => this.sns("kakaostory")}
        >
          <img
            src={kakaostoryImg}
            alt="kakaostory share"
            width={this.props.iconWidth}
          />
        </div>
        <div id="twitter" className="btn" onClick={() => this.sns("twitter")}>
          <img
            src={twitterImg}
            alt="twitter share"
            width={this.props.iconWidth}
          />
        </div>
        <div id="band" className="btn" onClick={() => this.sns("band")}>
          <img src={bandImg} alt="band share" width={this.props.iconWidth} />
        </div>
        <div id="facebook" className="btn" onClick={() => this.sns("facebook")}>
          <img
            src={facebookImg}
            alt="facebook share"
            width={this.props.iconWidth}
          />
        </div>
      </div>
    );
  }
}

export default ShareBox;
