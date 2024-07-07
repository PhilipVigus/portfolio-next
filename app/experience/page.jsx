import { MainHeading } from "../../components/mainHeading";
import experience from "../../data/experience.json";
import JobExperience from "../../components/jobExperience";

export default function Page() {
  return (
    <>
      <MainHeading title="Experience" />

      {experience.map((job) => (
        <JobExperience key={job.id} job={job} />
      ))}
    </>
  );
}
