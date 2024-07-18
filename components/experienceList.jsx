import { JobExperience } from "./jobExperience";

export default function ExperienceList({ experience }) {
  return (
    <div className="flex flex-col gap-10">
      {experience.map((job) => (
        <JobExperience key={job.id} job={job} />
      ))}
    </div>
  );
}
