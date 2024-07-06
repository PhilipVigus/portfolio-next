export function MainHeading({ title }) {
    return (
        <div className="mb-3 text-center">
            <h1 className="uppercase">{title}</h1>
            <div>{'-'.repeat(title.length)}</div>
        </div>
    );
}