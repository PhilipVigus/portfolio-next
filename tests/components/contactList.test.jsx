import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LinksList from "../../components/linksList";

describe("LinkList component", function () {
  it("renders the links list", function () {
    const links = [
      {
        id: 0,
        label: "First Item",
        link: "a-link",
      },
      {
        id: 1,
        label: "Second Item",
        link: "another-link",
      },
    ];

    render(<LinksList links={links} />);
    const renderedLinks = screen.getAllByRole("link", {});

    links.forEach((link, index) => {
      expect(renderedLinks[index].textContent).toEqual(`[${link.label}]`);
      expect(renderedLinks[index].getAttribute("href")).toEqual(link.link);
    });
  });

  it("renders the spacer between links", function () {
    const links = [
      {
        id: 0,
        label: "First Item",
        link: "a-link",
      },
      {
        id: 1,
        label: "Second Item",
        link: "another-link",
      },
    ];

    render(<LinksList links={links} />);
    const spacers = screen.getAllByText("-", {});

    expect(spacers).toHaveLength(links.length - 1);
  });
});
