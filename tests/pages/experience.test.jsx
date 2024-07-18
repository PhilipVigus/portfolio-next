import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/experience/page";
import experience from "../../data/experience.json";

describe("Experience page", function () {
  it("renders the heading", function () {
    render(<Page />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("Experience");
  });

  it("renders the experience list", function () {
    render(<Page />);
    const headings = screen.getAllByRole("heading", { level: 2 });

    expect(headings).toHaveLength(experience.length);
  });
});
