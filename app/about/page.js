export default async function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        About Me
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 mb-4">
        Hi! I’m <span className="font-semibold">Yong Lun Tan</span>, a Computer
        Engineering student of Singapore Institute of Technology with a strong
        passion for software development. I love turning ideas into real,
        working solutions — whether it’s through building web apps, solving
        algorithmic challenges, or contributing to open-source projects.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 mb-4">
        My main interests lie in full-stack development, with hands-on
        experience in technologies like{" "}
        <span className="font-medium">React, Node.js, Python</span>, and{" "}
        <span className="font-medium">Docker</span>. I’m currently diving deeper
        into backend systems and cloud deployment.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 mb-4">
        At university, I’ve worked on projects involving embedded systems and
        C++, but I found myself drawn to the creative and collaborative nature
        of software engineering. I’m now actively building side projects and
        sharpening my problem-solving skills through platforms like LeetCode and
        GitHub.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 mb-4">
        Outside of tech, I enjoy playing basketball, photography, and learning
        how things work.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 mb-4">
        I’m currently looking for internships or part-time roles where I can
        grow as a developer and contribute to impactful projects. If you'd like
        to chat or collaborate, feel free to{" "}
        <a href="/contact" className="text-blue-600 hover:underline">
          reach out
        </a>
        !
      </p>
    </div>
  );
}
