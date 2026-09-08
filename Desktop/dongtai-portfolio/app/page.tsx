import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-bold">Dongtai Huang</h1>

        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#experience" className="hover:text-white">
            Experience
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left side */}
        <div>
          <p className="mb-2 text-lg text-blue-400">
            Software Engineering Student @ McGill University
          </p>

          <a
            href="mailto:dongtai.huang@mail.mcgill.ca"
            className="text-lg text-blue-400 hover:text-blue-300"
          >
            Email: dongtai.huang@mail.mcgill.ca
          </a>

          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m Dongtai.
          </h2>

          <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-300 md:text-5xl">
            I build software that solves real problems.
          </h3>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m a Software Engineering student at McGill University with
            experience building full-stack applications using Java, Spring Boot,
            React, TypeScript, Python, and SQL.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-lg border border-slate-600 px-6 py-3 font-medium transition hover:border-white"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right side photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl md:h-[500px] md:w-[400px]">
            <Image
              src="/profile.png"
              alt="Dongtai Huang"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section
      id="about"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-24"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            A little about who I am
          </h2>

          <div className="relative mt-10 h-[420px] w-full max-w-md overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="/about-me.jpg"
              alt="Dongtai Huang"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-lg leading-8 text-slate-400">
            I&apos;m a Software Engineering student at McGill University with
            experience building full-stack applications, backend systems, and
            software that interacts with real-world hardware.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I enjoy learning new technologies, solving practical engineering
            problems, and building projects that are useful beyond the classroom.
            I&apos;m especially interested in software engineering, backend
            development, cloud technologies, and systems development.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold">Technologies I work with</h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Java",
            "Spring Boot",
            "Python",
            "React",
            "TypeScript",
            "Next.js",
            "SQL",
            "PostgreSQL",
            "MySQL",
            "Git",
            "Maven",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Projects
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Some things I&apos;ve built
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
        A selection of projects that demonstrate my experience with full-stack
        development, backend systems, databases, and hardware-software integration.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Project 1 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
          <h3 className="text-xl font-semibold">
            Meal Ticket Management System
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Full-stack system for managing meal ticket applications, issuance,
            card-based confirmation, usage, expiration, and reporting.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Java", "Spring Boot", "React", "TypeScript", "MySQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href="/projects/meal-ticket-system"
            className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View Project →
          </a>
        </div>

        {/* Project 2 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
          <h3 className="text-xl font-semibold">
            Flight Management Platform
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Web platform for managing flight information and improving the workflow
            for users interacting with flight-related data.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Java", "Spring Boot", "PostgreSQL", "REST API"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="/projects/flight-management-platform"
            className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View Project →
          </a>
        </div>

        {/* Project 3 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
          <h3 className="text-xl font-semibold">
            Fire Detection Robot
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Autonomous robot designed to detect fires, navigate around obstacles,
            and respond using integrated sensors and control logic.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "Robotics", "Sensors", "Hardware"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

         <a
          href="/projects/fire-detection-robot"
          className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
        >
          View Project →
        </a>
        </div>
      </div>
    </section>
    </main>
  );
}