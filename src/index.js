import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Footer from "./footer";

class ScreensApp extends React.Component {
  render() {
    return (
      <div className="w-full h-full">
          <Header />
          <Footer />
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<ScreensApp />, App);
