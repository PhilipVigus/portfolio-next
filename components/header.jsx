"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { link: "/", label: "About" },
  { link: "/skills", label: "Skills" },
  { link: "/experience", label: "Experience" },
  { link: "/links", label: "Links" },
];

export function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();

  const handleShowHideMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const handleNavigation = (link) => {
    router.push(link);
    setShowMenu(false);
  };

  return (
    <nav className="flex flex-row justify-end items-start gap-4 mb-12">
      {!!navItems?.length && (
        <ul className="flex flex-col md:flex-row md:justify-end items-end flex-wrap gap-x-8 gap-y-1 flex-grow">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={` no-underline ${showMenu ? "inline-block" : "hidden"} md:inline-block`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.link);
                }}
              >
                [{item.label}]
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div
        role="button"
        onClick={handleShowHideMenu}
        className="align-top md:hidden"
      >
        [{showMenu ? "x" : "="}]
      </div>
    </nav>
  );
}
