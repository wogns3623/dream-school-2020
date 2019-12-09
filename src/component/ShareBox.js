import React, { Component } from "react";

class ShareBox extends Component {
  componentDidMount() {
    window.Kakao.init("b356a2e405bb3aa3e99097c3753002aa");
    window.Kakao.Link.createDefaultButton({
      container: "#kakao",
      objectType: "feed",
      content: {
        title: "2019 학생이 만들어가는 꿈의학교",
        imageUrl: "http://wzine.kr/dreamschool2019/images/sns/kakao_img.png",
        link: {
          mobileWebUrl: "http://localhost:3000",
          webUrl: "http://localhost:3000"
        }
      }
    });
  }

  render() {
    let qS = { body: "2020 꿈의 학교", route: window.location.href };
    let band = [
      `https://band.us/plugin/share?body=${qS.body}&route=${qS.route}`,
      `bandapp://create/post?text=${qS.body}&route=${qS.route}`
    ];
    return (
      <div className="sns_wrap" style={{ display: "flex" }}>
        <div id="band">
          <a href={band[0]}> band</a>
        </div>
        <div id="kakao"> kakao</div>
      </div>
    );
  }
}

export default ShareBox;
