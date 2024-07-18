import { MainHeading } from "../../components/mainHeading";
import ExperienceList from "../../components/experienceList";
import experience from "../../data/experience.json";

export default function Page() {
  return (
    <main>
      <MainHeading title="Experience" />
      <ExperienceList experience={experience} />
    </main>
  );
}
