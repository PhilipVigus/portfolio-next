import Link from "next/link";
import React from "react";

export default function ContactsList({ contacts }) {
  return (
    <section>
      <nav aria-label="Contact links">
        <ul className="flex flex-col gap-5 items-center mt-10">
          {contacts.map((contact, index) => (
            <>
              <li key={contact.id}>
                <Link href={contact.link} target="_blank">
                  [{contact.label}]
                </Link>
              </li>
              {index < contacts.length - 1 && <span className="mx-2">-</span>}
            </>
          ))}
        </ul>
      </nav>
    </section>
  );
}
