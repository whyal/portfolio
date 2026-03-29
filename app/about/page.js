const focusAreas = [
  "Full-stack web development",
  "Backend systems and APIs",
  "Embedded systems foundations",
];

const values = [
  "I enjoy building software that feels useful, thoughtful, and easy to use.",
  "I care about clean problem solving, steady iteration, and learning in public.",
  "I’m looking for opportunities where I can contribute while growing quickly.",
];

export default function AboutPage() {
  return (
    <section className="bg-stone-50 text-stone-900">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-20 lg:px-12 lg:py-24">
        <div className="max-w-2xl flex-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
            About
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Building practical software with a calm, detail-oriented approach.
          </h1>

          <div className="mt-10 space-y-6 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              I’m Yong Lun Tan, a Computer Engineering student at the Singapore
              Institute of Technology with a strong interest in turning ideas
              into reliable digital products.
            </p>
            <p>
              My work sits mostly around full-stack development with tools like
              React, Node.js, Python, and Docker. I’m especially drawn to the
              balance between technical problem solving and creating experiences
              that feel clear and purposeful.
            </p>
            <p>
              University projects introduced me to embedded systems and C++, but
              software engineering is where I found the most momentum. These
              days I spend my time building side projects, sharpening backend
              skills, and learning by shipping.
            </p>
          </div>
        </div>

        <aside className="w-full max-w-xl lg:max-w-sm">
          <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(28,25,23,0.35)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm text-stone-600">
                <p>Based in Singapore</p>
                <p>Focused on software engineering and backend growth</p>
                <p>Open to internships and part-time opportunities</p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Focus Areas
              </p>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Outside Work
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Basketball, photography, and understanding how things work from
                first principles.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Approach
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
              {values.map((value) => (
                <p key={value}>{value}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Let&apos;s Connect
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              If you&apos;re looking for someone who enjoys thoughtful execution
              and steady growth, I&apos;d love to connect.
            </p>
            <a
              href="https://www.linkedin.com/in/yong-lun-tan/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center border-b border-stone-900 pb-1 text-sm font-medium tracking-[0.18em] text-stone-900 uppercase transition hover:text-stone-600"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
