import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/page";

describe("Home page", function () {
  it("renders the heading", function () {
    render(<Page />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("Welcome to my portfolio!");
  });
});
