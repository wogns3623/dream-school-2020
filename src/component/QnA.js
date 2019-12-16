import React, { Component } from "react";
import qnaData from "assets/data/qnaData.json";

import "style/Qna.css";

class QnA extends Component {
  state = {
    activeQ: null
  };

  handleQna = index => {
    if (index === this.state.activeQ) {
      this.setState({ activeQ: null });
    } else {
      this.setState({ activeQ: index });
    }
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

  render() {
    return (
      <div className="qna_container">
        <h2>
          <br></br>
        </h2>
        {qnaData.map((item, index) => {
          return (
            <div className="qna_content" key={index}>
              <div className="Q" onClick={() => this.handleQna(index)}>
                Q.{item.q}
              </div>
              <div
                className={`A${this.state.activeQ === index ? " active" : ""}`}
              >
                <ul>
                  {item.a.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QnA;
