import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ExperienceList from "../../components/experienceList";

describe("ExperienceList component", function () {
  it("renders the experience list", function () {
    const experience = [
      {
        id: 0,
        title: "First Item",
        date: "a-date",
        company: "a-company",
        description: "a-description",
        achievements: ["an-achievement"],
      },
      {
        id: 1,
        title: "Second Item",
        date: "another-date",
        company: "another-company",
        description: "another-description",
        achievements: ["another-achievement"],
      },
    ];

    render(<ExperienceList experience={experience} />);

    const headings = screen.getAllByRole("heading", { level: 2 });

    expect(headings).toHaveLength(2);

    for (let i = 0; i < headings.length; i++) {
      expect(headings[i].textContent).toEqual(experience[i].title);
    }
  });
});
