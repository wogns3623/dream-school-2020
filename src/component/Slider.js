import React, { Component } from "react";
import Swiper from "react-id-swiper";
import pageImg1 from "assets/images/page/01.jpg";
import pageImg2 from "assets/images/page/02.jpg";
import pageImg3_top from "assets/images/page/03_top.jpg";
// import pageImg3_side from "assets/images/page/03_side.jpg";
import pageImg3_bottom from "assets/images/page/03_bottom.jpg";
import pageImg4 from "assets/images/page/04.jpg";
import pageImg5_top from "assets/images/page/05_top.jpg";
import pageImg6_top from "assets/images/page/06_top.jpg";
import btnImg1 from "assets/images/page/2019_main_new_btn01.gif";
import btnImg2 from "assets/images/page/2019_main_new_btn02.gif";
import btnImg3 from "assets/images/page/2019_main_new_btn03.gif";
import qnaData from "assets/data/qnaData.json";
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
  state = {
    activeQ: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.activeQ !== nextState.activeQ) {
      if (this.state.activeQ !== null) {
        let prevA = document.getElementsByClassName("A")[this.state.activeQ];
        prevA.style.height = "0px";
      }
      if (nextState.activeQ !== null) {
        let nextA = document.getElementsByClassName("A")[nextState.activeQ];
        nextA.style.height = nextA.children[0].clientHeight + 40 + "px";
      }

      return true;
    } else {
      return false;
    }
  }

  handleQna = index => {
    if (index === this.state.activeQ) {
      this.setState({ activeQ: null });
    } else {
      this.setState({ activeQ: index });
    }
  };

  render() {
    return (
      <Swiper
        {...this.params}
        getSwiper={swiper => {
          this.props.setSwiper(swiper);
        }}
      >
        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg1} alt="slide first page" />
            <div className="bottom_page"></div>
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg2} alt="slide second page" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <h2>학생이 만들어가는 꿈의 학교</h2>
            <section className="qna_container">
              {qnaData.map((item, index) => {
                return (
                  <div className="qna_content">
                    <div className="Q" onClick={() => this.handleQna(index)}>
                      {item.q}
                    </div>
                    <div
                      className={`A${
                        this.state.activeQ === index ? " active" : ""
                      }`}
                    >
                      <ul>
                        {item.a.map((item, index) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg3_top} alt="slide fourth page content" />
            <div className="btn_wrap">
              <img
                className="btn applyBtn"
                src={btnImg1}
                alt="slide third page button"
              />
            </div>
            <img src={pageImg3_bottom} alt="slide fourth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg4} alt="slide fifth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg5_top} alt="slide sixth page content" />
            <div className="btn_wrap">
              <img
                className="btn applyBtn"
                src={btnImg3}
                alt="slide third page button"
              />
            </div>
            <img src={pageImg3_bottom} alt="slide sixth page bottom" />
          </div>
        </div>

        <div style={{ width: window.innerWidth }}>
          <div>
            <img src={pageImg6_top} alt="slide sixth page content" />
            <div className="content_wrap">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="tbl_type6"
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
                    <th rowspan="2">화성오산</th>
                    <td rowspan="2">
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
                    <th rowspan="2">
                      경기도
                      <br />
                      교육청
                    </th>
                    <td rowspan="2">
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
