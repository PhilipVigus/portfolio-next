"use client";

import "../styles/home.css";
import { MainHeading } from "../components/mainHeading";
import skills from "../data/skills.json";
import { SubHeading } from "../components/subHeading";

export default function Page() {
  return (
    <>
      <ManiHeading title="Welcome to my portfolio!" />

      <p>
        My name is Phil Vigus and I&apos;m a full-stack developer with a passion
        for building great applications. I live in Sweden, and work for
        Allakando as a Senior Full-Stack Developer.
      </p>
      <ul>
        <SubHeading title="Skills" />
        {skills.map((skill) => (
          <li key={skill.category}>
            {skill.category} - {skill.list.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}
