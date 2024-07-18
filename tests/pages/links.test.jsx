import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/links/page";
import links from "../../data/links.json";

describe("Links page", function () {
  it("renders the heading", function () {
    render(<Page />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("Links");
  });

  it("renders the links list", function () {
    render(<Page />);
    const renderedLinks = screen.getAllByRole("link", {});

    expect(renderedLinks).toHaveLength(links.length);
  });
});
