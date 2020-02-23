import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Footer from "./footer";

import FacebookWhiteIcon from "../assets/social/facebook-white.svg";
import TwitterWhiteIcon from "../assets/social/twitter-white.svg";
import InstagramWhiteIcon from "../assets/social/instagram-white.svg";

import AppStore from "../assets/store/app-store.svg";
import PlayStore from "../assets/store/play-store.svg";
import WindowsStore from "../assets/store/windows-store.svg";

class ScreensApp extends React.Component {
  render() {
    return (
      <div className="w-full h-full">
        <Header />
        <Footer
          socialIcons={[
            { url: FacebookWhiteIcon, alt: "Facebook Icon", height: 24, width: 24 },
            { url: TwitterWhiteIcon, alt: "Twitter Icon", height: 32, width: 32 },
            { url: InstagramWhiteIcon, alt: "Instagram Icon", height: 32, width: 32 }
          ]}
          appStoreIcons={[
            { url: AppStore, alt: "App Store Icon", height: 96, width: 96 },
            { url: PlayStore, alt: "Play Store Icon", height: 96, width: 96 },
            { url: WindowsStore, alt: "Windoes Store Icon", height: 96, width: 96 }
          ]}
        />
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<ScreensApp />, App);
