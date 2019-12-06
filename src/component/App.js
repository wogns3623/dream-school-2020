import React, { Component } from "react";
import Header from "component/Header";
import Footer from "component/Footer";
import "style/App.css";

class App extends Component {
  state = {
    isMobile: false,
    currentTab: 0
  };

  constructor() {
    super();

    window.addEventListener("resize", this.resize.bind(this));
  }

  componentDidMount() {
    this.resize();
  }

  resize() {
    let currentIsMobile = window.innerWidth < 880;
    if (currentIsMobile !== this.state.isMobile) {
      console.log("resize event\n currentIsMobile is ", currentIsMobile);
      this.setState({ isMobile: currentIsMobile });
    }
  }

  handleTab = index => {
    this.setState({
      currentTab: index
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState)
  // }

  render() {
    return (
      <>
        <Header
          isMobile={this.state.isMobile}
          handleTab={this.handleTab}
        ></Header>
        <main className="App">
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </div>
        </main>
        <div className="swipe_btn_wrap">
          <div className="swipe_btn_left">{"<"}</div>
          <div className="swipe_btn_right">{">"}</div>
        </div>
        <Footer isMobile={this.state.isMobile}></Footer>
      </>
    );
  }
}

export default App;
