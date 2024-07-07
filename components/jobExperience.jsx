import { SubHeading } from "./subHeading";

export default function JobExperience({ job }) {
  return (
    <div key={job.company}>
      <SubHeading title={job.title} />
      <p>{job.description}</p>
      <ul>
        <div>Key achievements:</div>
        {job.achievements.map((achievement) => (
          <li key={achievement}>-&nbsp;{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
