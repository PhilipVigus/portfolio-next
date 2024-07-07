import { SubHeading } from "./subHeading";

export default function JobExperience({ job }) {
  return (
    <div key={job.company}>
      <div className="flex justify-between">
        <SubHeading title={job.title} />
        <div>{job.date}</div>
      </div>
      <div className="mb-3">{job.company}</div>
      <p>{job.description}</p>
      {job.achievements && (
        <ul>
          <div>Key achievements:</div>
          {job.achievements.map((achievement) => (
            <li key={achievement}>-&nbsp;{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
