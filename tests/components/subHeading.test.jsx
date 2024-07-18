import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubHeading } from "../../components/subHeading";

describe("SubHeading component", function () {
  it("renders the heading", function () {
    render(<SubHeading title="A test subheading" />);
    const headingText = screen.getByRole("heading", { level: 2 });

    expect(headingText.textContent).toEqual("A test subheading");
  });

  it("renders the underline", function () {
    const titleText = "A test subheading";
    render(<SubHeading title="A test subheading" />);
    const underline = screen.getByText("-".repeat(titleText.length), {});

    expect(underline).toBeInTheDocument();
  });
});
