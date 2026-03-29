import Link from "next/link";

const highlights = [
  "Building practical full-stack applications",
  "Growing deeper in backend systems and APIs",
  "Interested in thoughtful, user-friendly software",
];

export default function Home() {
  return (
    <section className="bg-stone-50 text-stone-900">
      <div className="mx-auto grid min-h-[calc(100vh-140px)] max-w-6xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
            Yong Lun Tan
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Minimal software, built with care.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            I’m a Computer Engineering student building clean, reliable digital
            experiences with a focus on steady execution and practical impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium tracking-[0.18em] text-stone-50 uppercase transition hover:bg-stone-700"
            >
              Learn More
            </Link>
            <a
              href="https://www.linkedin.com/in/yong-lun-tan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium tracking-[0.18em] text-stone-700 uppercase transition hover:border-stone-500 hover:text-stone-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="w-full max-w-xl">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(28,25,23,0.35)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Current Focus
            </p>
            <ul className="mt-6 space-y-4 text-sm text-stone-700 sm:text-base">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-7">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Status
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                Open to internships and part-time roles where I can contribute,
                learn quickly, and keep building strong engineering habits.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
