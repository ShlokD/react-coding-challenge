import React from "react";
import Footer from "./index";
import { render } from "@testing-library/react";

describe("Footer component", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Footer
        socialIcons={[{ url: "some-social-url", alt: "some-social-url" }]}
        appStoreIcons={[{ url: "some-store-url", alt: "some-store-url" }]}
      />
    );
  });

  test("it renders the footer links", () => {
    expect(component.getAllByTestId("footer-link").length).toEqual(6);
  });

  test("it renders the copyright statement", () => {
    expect(
      component.getByText("Copyright © Stream-It-Now. All Rights Reserved.")
    );
  });

  test("it renders the social links", () => {
    expect(component.getAllByAltText("some-social-url").length).toEqual(1);
  });

  test("it renders the app store links", () => {
    expect(component.getAllByAltText("some-store-url").length).toEqual(1);
  });
});
