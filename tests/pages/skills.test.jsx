import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/skills/page";

describe("Skills page", function () {
  it("renders the heading", function () {
    render(<Page />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("Technical Skills");
  });

  it("renders the experience list", function () {
    render(<Page />);
    const list = screen.getByRole("list", {});

    expect(list).toBeInTheDocument();
  });
});
