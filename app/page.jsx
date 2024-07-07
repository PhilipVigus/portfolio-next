"use client";

import "../styles/home.css";
import { MainHeading } from "../components/mainHeading";
import skills from "../data/skills.json";
import SkillsList from "../components/skillsList";

export default function Page() {
  return (
    <>
      <MainHeading title="Welcome to my portfolio!" />

      <p>
        My name is Phil Vigus and I&apos;m a full-stack developer with a passion
        for building great applications. I live in Sweden, and work a Senior
        Full-Stack Developer.
      </p>
      <p>
        After qualifying with a degree in Computer Science, I spent the early
        part of my career in the tech industry, initially as a developer before
        moving into business development. I then taught ICT, before taking a
        role in educational quality assurance.
      </p>
      <p>
        About six years a go I changed direction, returning to my roots in
        software development. Since then I&apos;ve worked in a variety of
        programming roles, including backend and full-stack development, and
        consulting. I currently work for Allakando as a Senior Full-Stack
        Developer.
      </p>
      <SkillsList skills={skills} />
    </>
  );
}
