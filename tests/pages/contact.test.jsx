import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../../app/contact/page";
import contacts from "../../data/contacts.json";

describe("Contact page", function () {
  it("renders the heading", function () {
    render(<Page />);
    const headingText = screen.getByRole("heading", { level: 1 });

    expect(headingText.textContent).toEqual("Contact");
  });

  it("renders the contact list", function () {
    render(<Page />);
    const links = screen.getAllByRole("link", {});

    expect(links).toHaveLength(contacts.length);
  });
});
