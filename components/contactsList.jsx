import Link from "next/link";

export default function ContactsList({ contacts }) {
  return (
    <ul className="flex flex-col gap-5 items-center mt-10">
      {contacts.map((contact, index) => (
        <>
          <Link key={contact.id} href={contact.link} target="_blank">
            <li>[{contact.label}]</li>
          </Link>
          {index < contacts.length - 1 && <span className="mx-2">-</span>}
        </>
      ))}
    </ul>
  );
}
