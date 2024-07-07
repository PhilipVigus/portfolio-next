import { MainHeading } from "../../components/mainHeading";
import contacts from "../../data/contacts.json";
import ContactsList from "../../components/contactsList";

export default function Page() {
  return (
    <>
      <MainHeading title="Contact" />
      <ContactsList contacts={contacts} />
    </>
  );
}
