import { SubHeading } from "./subHeading";

export default function JobExperience({ job }) {
  return (
    <div key={job.company}>
      <SubHeading
        title={`${job.title} - ${job.company}, ${job.location} (${job.date})`}
      />
      <ul>
        {job.desc.map((point) => (
          <li key={point}>-&nbsp;{point}</li>
        ))}
      </ul>
    </div>
  );
}
