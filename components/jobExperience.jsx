import { SubHeading } from "./subHeading";

export function JobExperience({ job }) {
  return (
    <article>
      <div className="flex justify-between flex-col md:flex-row mb-3 md:mb-0">
        <SubHeading title={job.title} />
        {job.date && <div>({job.date})</div>}
      </div>
      {job.company && <div className="mb-3">{job.company}</div>}
      <div className="mb-3">{job.description}</div>
      {job.achievements && (
        <ul>
          <div>Key achievements:</div>
          {job.achievements.map((achievement) => (
            <li
              key={achievement}
              className="grid grid-cols-[minmax(0,max-content)_minmax(0,max-content)_1fr] gap-2"
            >
              <span>-</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
