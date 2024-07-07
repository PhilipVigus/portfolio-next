import { SubHeading } from "./subHeading";

export default function SkillsList({ skills }) {
  return (
    <div className="mb-3">
      <SubHeading title="Skills" />
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.category}
            className="grid grid-cols-[minmax(0,max-content)_minmax(0,max-content)_1fr] gap-4"
          >
            <div className="text-right w-32">{skill.category}</div>
            <div>-</div>
            <div className="text-left">{skill.list.join(", ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
