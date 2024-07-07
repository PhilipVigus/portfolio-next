import { MainHeading } from "../../components/mainHeading";
import experience from "../../data/experience.json";
import JobExperience from "../../components/jobExperience";

export default function Page() {
  return (
    <>
      <MainHeading title="Experience" />

      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <JobExperience key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
