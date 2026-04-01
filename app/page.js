import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";

export default function Home() {
  return (
    <section className="bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12">
        {projects.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[calc(100vh-11rem)] items-center justify-center">
            <div className="w-full max-w-2xl rounded-[2rem] border border-stone-200 bg-white px-6 py-10 text-center shadow-[0_20px_60px_-40px_rgba(28,25,23,0.35)] sm:px-10 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
                Portfolio Curation In Progress
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                Handpicking the good stuff.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                I&apos;m currently selecting the projects that best represent my
                work, so the showcase will be updated soon with the right mix of
                builds, experiments, and shipped ideas.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
