import skills from "../data/skills.json";

export default function SkillsList() {
  return (
    <section className="mb-3">
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.category}
            className="grid grid-cols-[minmax(0,max-content)_minmax(0,max-content)_1fr] gap-4"
          >
            <strong className="text-right w-32">{skill.category}</strong>
            <span>-</span>
            <p className="text-left">{skill.list.join(", ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
