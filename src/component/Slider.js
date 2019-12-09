import React, { Component } from "react";
import Swiper from "react-id-swiper";
import QnA from "component/QnA";
import pageImg1 from "assets/images/page/main.png";
import pageImg2 from "assets/images/page/info.png";
import pageImg3_top from "assets/images/page/application.png";
import pageImg3_bottom from "assets/images/page/numb.png";
import pageImg4 from "assets/images/page/apptip.png";
import pageImg5_top from "assets/images/page/explain.png";
import pageImg6_top from "assets/images/page/numt.png";
import btnImg1 from "assets/images/page/app_.png";
import btnImg2 from "assets/images/page/tip_.png";
import btnImg3 from "assets/images/page/enter_.png";
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

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    let sliderWidth = { width: window.innerWidt };
    return (
      <Swiper
        {...this.params}
        getSwiper={swiper => {
          this.props.setSwiper(swiper);
        }}
      >
        <div style={sliderWidth}>
          <div>
            <img src={pageImg1} alt="slide first page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img src={pageImg2} alt="slide second page" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <h2>학생이 만들어가는 꿈의 학교</h2>
            <QnA></QnA>
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img src={pageImg3_top} alt="slide fourth page content" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img src={pageImg4} alt="slide fifth page bottom" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img src={pageImg5_top} alt="slide sixth page content" />
          </div>
        </div>

        <div style={sliderWidth}>
          <div>
            <img src={pageImg6_top} alt="slide sixth page content" />
            <div className="content_wrap">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                className="tbl_type6"
              >
                <colgroup>
                  <col width="" />
                  <col width="" />
                  <col width="" />
                  <col width="" />
                </colgroup>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>문의처</th>
                    <th>제목</th>
                    <th>문의처</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>가평</th>
                    <td>
                      <a href="tel:031-580-5182">031-580-5182</a>
                    </td>
                    <th>안양과천</th>
                    <td>
                      <a href="tel:031-380-7277">031-380-7277</a>
                    </td>
                  </tr>
                  <tr>
                    <th>고양</th>
                    <td>
                      <a href="tel:031-900-2938">031-900-2938</a>
                    </td>
                    <th>양평</th>
                    <td>
                      <a href="tel:031-770-5229">031-770-5229</a>
                    </td>
                  </tr>
                  <tr>
                    <th>광명</th>
                    <td>
                      <a href="tel:02-2610-1403">02-2610-1403</a>
                    </td>
                    <th>여주</th>
                    <td>
                      <a href="tel:031-880-2351">031-880-2351</a>
                    </td>
                  </tr>
                  <tr>
                    <th>광주하남</th>
                    <td>
                      <a href="tel:031-280-7231">031-280-7231</a>
                    </td>
                    <th>연천</th>
                    <td>
                      <a href="tel:031-839-0213">031-839-0213</a>
                    </td>
                  </tr>
                  <tr>
                    <th>구리남양주</th>
                    <td>
                      <a href="tel:02-2610-1403">031-550-6162</a>
                    </td>
                    <th>용인</th>
                    <td>
                      <a href="tel:031-8020-9261">031-8020-9261</a>
                    </td>
                  </tr>
                  <tr>
                    <th>군포</th>
                    <td>
                      <a href="tel:031-390-1127">031-390-1127</a>
                    </td>
                    <th>의정부</th>
                    <td>
                      <a href="tel:031-820-0083">031-820-0083</a>
                    </td>
                  </tr>
                  <tr>
                    <th>김포</th>
                    <td>
                      <a href="tel:031-980-1245">031-980-1245</a>
                    </td>
                    <th>이천</th>
                    <td>
                      <a href="tel:031-639-5639">031-639-5639</a>
                    </td>
                  </tr>
                  <tr>
                    <th>동두천양주</th>
                    <td>
                      <a href="tel:031-860-4386">031-860-4386</a>
                    </td>
                    <th>파주</th>
                    <td>
                      <a href="tel:031-940-7222">031-940-7222</a>
                    </td>
                  </tr>
                  <tr>
                    <th>부천</th>
                    <td>
                      <a href="tel:032-620-0210">032-620-0210</a>
                    </td>
                    <th>평택</th>
                    <td>
                      <a href="tel:031-650-1253">031-650-1253</a>
                    </td>
                  </tr>
                  <tr>
                    <th>성남</th>
                    <td>
                      <a href="tel:031-780-2528">031-780-2528</a>
                    </td>
                    <th>포천</th>
                    <td>
                      <a href="tel:031-539-0163">031-539-0163</a>
                    </td>
                  </tr>
                  <tr>
                    <th>수원</th>
                    <td>
                      <a href="tel:031-250-1383">031-250-1383</a>
                    </td>
                    <th rowSpan="2">화성오산</th>
                    <td rowSpan="2">
                      <a href="tel:031-371-0667">031-371-0667(화성)</a>
                      <br />
                      <a href="tel:031-371-0673">031-371-0673(오산)</a>
                    </td>
                  </tr>
                  <tr>
                    <th>시흥</th>
                    <td>
                      <a href="tel:031-488-2406">031-488-2406</a>
                    </td>
                  </tr>
                  <tr>
                    <th>안산</th>
                    <td>
                      <a href="tel:031-412-4563">031-412-4563</a>
                    </td>
                    <th rowSpan="2">
                      경기도
                      <br />
                      교육청
                    </th>
                    <td rowSpan="2">
                      <a href="tel:031-820-0902">031-820-0902</a>
                      <br />
                      <a href="tel:031-820-0908">031-820-0908</a>
                    </td>
                  </tr>
                  <tr>
                    <th>안성</th>
                    <td>
                      <a href="tel:031-678-5236">031-678-5236</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src={pageImg3_bottom} alt="slide sixth page bottom" />
          </div>
        </div>
      </Swiper>
    );
  }
}

export default Slider;
