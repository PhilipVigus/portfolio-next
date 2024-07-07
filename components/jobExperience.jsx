import { SubHeading } from "./subHeading";

export default function JobExperience({ job }) {
  return (
    <div key={job.company}>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <SubHeading title={job.title} />
          <div>({job.company})</div>
        </div>
        <div>{job.date}</div>
      </div>
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
