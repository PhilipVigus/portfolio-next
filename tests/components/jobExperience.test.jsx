import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { JobExperience } from "../../components/jobExperience";

describe("Job Experience component", function () {
  const job = {
    title: "A test title",
    date: "A test date",
    company: "A test company",
    description: "A test description",
    achievements: ["A test achievement"],
  };

  it("renders the heading", function () {
    render(<JobExperience job={job} />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading.textContent).toEqual(job.title);
  });

  it("renders the date when present", function () {
    render(<JobExperience job={job} />);

    const date = screen.getByText(`(${job.date})`, {});

    expect(date).toBeInTheDocument();
  });

  it("renders nothing when the date is not present", function () {
    job.date = undefined;

    render(<JobExperience job={job} />);

    const date = screen.queryByText("()", {});

    expect(date).toBeNull();
  });

  it("renders the company", function () {
    render(<JobExperience job={job} />);

    const company = screen.getByText(job.company, {});

    expect(company).toBeInTheDocument();
  });

  it("renders the description", function () {
    render(<JobExperience job={job} />);

    const description = screen.getByText(job.description, {});

    expect(description).toBeInTheDocument();
  });

  it("renders the achievements when present", function () {
    render(<JobExperience job={job} />);

    const achievementsIntroText = screen.getByText("Key achievements:", {});
    const achievements = screen.getAllByRole("listitem", {});

    expect(achievementsIntroText).toBeInTheDocument();
    expect(achievements.length).toEqual(job.achievements.length);
  });

  it("renders nothing when no achievements are present", function () {
    job.achievements = undefined;

    render(<JobExperience job={job} />);

    const achievementsIntroText = screen.queryByText("Key achievements:", {});
    expect(achievementsIntroText).toBeNull();
  });
});
