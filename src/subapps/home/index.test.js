import React from "react";
import Home from "./index";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  let component;

  beforeEach(() => {
    const options = [
      {
        title: "Series",
        imageUrl: "some-series-img",
        imageAlt: "series image",
        subtitle: "Popular Series",
        redirectUrl: "/series"
      },
      {
        title: "Movies",
        imageUrl: "some-movies-img",
        imageAlt: "movies image",
        subtitle: "Popular Movies",
        redirectUrl: "/movies"
      }
    ];
    component = render(<BrowserRouter><Home options={options} /></BrowserRouter>);
  });

  test("it renders two cards", () => {
    expect(component.getAllByTestId("app-home-card").length).toEqual(2);
  });

  test("it renders a series card", () => {
    expect(component.getByText("Popular Series")).toBeDefined();
  }); 

  test("it renders a movies cards", () => {
    expect(component.getByText("Popular Movies")).toBeDefined();
  });

  test("it renders a series image", () => {
    expect(component.getByAltText("series image")).toBeDefined();
  });

  test("it renders a movies image", () => {
    expect(component.getByAltText("movies image")).toBeDefined();
  });
});
