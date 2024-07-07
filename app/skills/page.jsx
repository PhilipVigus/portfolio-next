import { MainHeading } from "../../components/mainHeading";
import SkillsList from "../../components/skillsList";
import skills from "../../data/skills.json";

export default function Page() {
  return (
    <>
      <MainHeading title="Technical Skills" />
      <SkillsList skills={skills} />
    </>
  );
}
