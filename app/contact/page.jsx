import { MainHeading } from "../../components/mainHeading";
import ContactsList from "../../components/contactsList";
import contacts from "../../data/contacts";

export default function Page() {
  return (
    <>
      <MainHeading title="Contact" />
      <ContactsList contacts={contacts} />
    </>
  );
}
