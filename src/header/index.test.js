import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./index";
import { render } from "@testing-library/react";

describe("Header component", () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test("it renders the app title", () => {
    expect(component.getByTestId("app-title").localName).toEqual("h1");
  });

  test("it renders the app title", () => {
    expect(component.getByTestId("app-title").textContent).toEqual(
      "Stream-It-Now"
    );
  });

  test("it renders a login link with a title", () => {
    expect(component.getByTestId("app-login").textContent).toEqual("Login now");
  });

  test("it renders a login link", () => {
    expect(component.getByTestId("app-login").localName).toEqual("a");
  });

  test("it renders a free trial link", () => {
    expect(component.getByTestId("app-trial").textContent).toEqual(
      "Start your Free Trial"
    );
  });

  test("it renders a free trial link", () => {
    expect(component.getByTestId("app-trial").localName).toEqual("a");
  });
});
