import { SubHeading } from "./subHeading";

export default function JobExperience({ job }) {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row mb-3 md:mb-0">
        <SubHeading title={job.title} />
        {job.date && <div>({job.date})</div>}
      </div>
      <div className="mb-3">{job.company}</div>
      <div className="mb-3">{job.description}</div>
      {job.achievements && (
        <ul>
          <div>Key achievements:</div>
          {job.achievements.map((achievement) => (
            <li
              key={achievement}
              className="grid grid-cols-[minmax(0,max-content)_minmax(0,max-content)_1fr] gap-2"
            >
              <div>-</div>
              <div>{achievement}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
