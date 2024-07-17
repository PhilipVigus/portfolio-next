import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainHeading } from "../../components/mainHeading";

describe("MainHeading", function () {
  it("renders the heading", function () {
    render(<MainHeading title="A test main heading" />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("A test main heading");
  });

  it("renders the underline", function () {
    const titleText = "A test main heading";
    render(<MainHeading title="A test main heading" />);
    const underline = screen.getByText("-".repeat(titleText.length), {});

    expect(underline).toBeInTheDocument();
  });
});
