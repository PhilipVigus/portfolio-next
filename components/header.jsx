"use client";
import Link from "next/link";
import React from "react";

const navItems = [
  { link: "/", label: "About" },
  { link: "/experience", label: "Experience" },
  { link: "/stuff-ive-done", label: "Stuff I've Done" },
  { link: "/contact", label: "Contact" },
];

export function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleClick = () => {
    console.log("clicked");
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <nav className="flex flex-row justify-end items-start gap-4 pb-12">
      {!!navItems?.length && (
        <ul className="flex flex-col md:flex-row md:justify-end items-end flex-wrap gap-x-2 gap-y-1 flex-grow">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`px-1.5 transition no-underline ${showMenu ? "inline-block" : "hidden"} md:inline-block`}
              >
                [{item.label}]
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div role="button" onClick={handleClick} className="align-top md:hidden">
        [x]
      </div>
    </nav>
  );
}
