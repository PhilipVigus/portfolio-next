import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactsList from "../../components/contactsList";

describe("ContactList", () => {
  it("renders the contact list", () => {
    const contacts = [
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

    render(<ContactsList contacts={contacts} />);
    const links = screen.getAllByRole("link", {});

    contacts.forEach((contact, index) => {
      expect(links[index].textContent).toEqual(`[${contact.label}]`);
      expect(links[index].getAttribute("href")).toEqual(contact.link);
    });
  });

  it("renders the spacer between contacts", () => {
    const contacts = [
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

    render(<ContactsList contacts={contacts} />);
    const spacers = screen.getAllByText("-", {});

    expect(spacers).toHaveLength(1);
  });
});
