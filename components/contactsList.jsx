import Link from "next/link";
import React from "react";

export default function ContactsList({ contacts }) {
  return (
    <ul className="flex flex-col gap-5 items-center mt-10">
      {contacts.map((contact, index) => (
        <React.Fragment key={contact.id}>
          <li>
            <Link key={contact.id} href={contact.link} target="_blank">
              [{contact.label}]
            </Link>
          </li>
          {index < contacts.length - 1 && <span className="mx-2">-</span>}
        </React.Fragment>
      ))}
    </ul>
  );
}
