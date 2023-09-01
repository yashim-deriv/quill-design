import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "./";

describe("Button", () => {
  test("Should render proper label", () => {
    render(<Button label="Button test" />);
    expect(
      screen.getByRole("button", { name: "Button test" })
    ).toBeInTheDocument();
  });
});
