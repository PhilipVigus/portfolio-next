import React from "react";

export default function LinksList({ links }) {
  return (
    <section>
      <nav aria-label="Links">
        <ul className="flex flex-col gap-5 items-center mt-10">
          {links.map((link, index) => (
            <React.Fragment key={link.id}>
              <li>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  [{link.label}]
                </a>
              </li>
              {index < links.length - 1 && <span className="mx-2">-</span>}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </section>
  );
}
