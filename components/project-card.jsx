export default function ProjectCard({
    title,
    category,
    year,
    summary,
    stack = [],
    href,
}) {
    const content = (
        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(28,25,23,0.35)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-38px_rgba(28,25,23,0.35)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                        {category}
                    </p>
                    <h2 className="mt-4 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
                        {title}
                    </h2>
                </div>
                {year ? <p className="text-sm text-stone-400">{year}</p> : null}
            </div>

            <p className="mt-6 text-sm leading-7 text-stone-600">{summary}</p>

            {stack.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                    {stack.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-500"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            ) : null}
        </article>
    );

    if (!href) {
        return content;
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {content}
        </a>
    );
}
