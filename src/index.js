import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import FacebookWhiteIcon from "../assets/social/facebook-white.svg";
import TwitterWhiteIcon from "../assets/social/twitter-white.svg";
import InstagramWhiteIcon from "../assets/social/instagram-white.svg";

import AppStore from "../assets/store/app-store.svg";
import PlayStore from "../assets/store/play-store.svg";
import WindowsStore from "../assets/store/windows-store.svg";

import PlaceholderImage from "../assets/placeholder.png";

import Header from "./header";
import Footer from "./footer";

import Home from "./subapps/home";

const Series = lazy(() => import("./subapps/series"));
const Movies = lazy(() => import("./subapps/movies"));

class ScreensApp extends Component {
  constructor(props) {
    super(props);
    this.homeOptions = [
      {
        title: "SERIES",
        subtitle: "Popular Series",
        imageUrl: PlaceholderImage,
        imageAlt: "Image for Series",
        redirectUrl: "/series"
      },
      {
        title: "MOVIES",
        subtitle: "Popular Movies",
        imageUrl: PlaceholderImage,
        imageAlt: "Image for Movies",
        redirectUrl: "/movies"
      }
    ];

    this.socialIcons = [
      {
        url: FacebookWhiteIcon,
        alt: "Facebook Icon",
        height: 24,
        width: 24
      },
      {
        url: TwitterWhiteIcon,
        alt: "Twitter Icon",
        height: 32,
        width: 32
      },
      {
        url: InstagramWhiteIcon,
        alt: "Instagram Icon",
        height: 32,
        width: 32
      }
    ];

    this.appStoreIcons = [
      { url: AppStore, alt: "App Store Icon", height: 96, width: 96 },
      { url: PlayStore, alt: "Play Store Icon", height: 96, width: 96 },
      {
        url: WindowsStore,
        alt: "Windoes Store Icon",
        height: 96,
        width: 96
      }
    ];
  }
  render() {
    return (
      <div className="w-full h-full">
        <BrowserRouter>
          <Header />

          <Route path="/" exact>
            <Home options={this.homeOptions} />
          </Route>
          <Route path="/series">
            <Suspense fallback={<div>Loading...</div>}>
              <Series />
            </Suspense>
          </Route>
          <Route path="/movies">
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          </Route>
          <Footer
            socialIcons={this.socialIcons}
            appStoreIcons={this.appStoreIcons}
          />
        </BrowserRouter>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<ScreensApp />, App);
