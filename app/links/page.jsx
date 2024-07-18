import { MainHeading } from "../../components/mainHeading";
import LinksList from "../../components/linksList";
import links from "../../data/links.json";

export default function Page() {
  return (
    <main>
      <MainHeading title="Links" />
      <LinksList links={links} />
    </main>
  );
}
