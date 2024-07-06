"use client";

import "../styles/main.css";
import { MainHeading } from "../components/main-heading";

export default function Page() {
  return (
    <>
      <MainHeading title="Welcome to my portfolio!" />

      <p>
        My name is Phil Vigus and I&apos;m a full-stack developer with a passion
        for building great applications. I live in Sweden, and work for
        Allakando as a Senior Full-Stack Developer.
      </p>
      <div className="interlaced"></div>
      <div className="glare"></div>
    </>
  );
}
