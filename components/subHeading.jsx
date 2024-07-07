export function SubHeading({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{"-".repeat(title.length)}</div>
    </div>
  );
}
