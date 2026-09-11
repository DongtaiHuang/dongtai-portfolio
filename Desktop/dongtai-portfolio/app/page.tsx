import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <a
            href="#top"
            className="shrink-0 text-xl font-bold transition hover:text-blue-400"
          >
            Dongtai Huang
          </a>

          <div className="flex max-w-full gap-4 overflow-x-auto whitespace-nowrap text-xs text-slate-300 md:gap-6 md:text-sm">
            <a
              href="#aboutme"
              className="transition hover:text-blue-400"
            >
              About Me
            </a>

            <a
              href="#education"
              className="transition hover:text-blue-400"
            >
              Education
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition hover:text-blue-400"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="top"
        className="mx-auto grid min-h-[80vh] max-w-6xl scroll-mt-24 items-center gap-12 px-6 py-16 md:grid-cols-2"
      >
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m Dongtai.
          </h1>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-300 md:text-5xl">
            I build software that solves real problems.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m a Software Engineering student at McGill University with
            experience building full-stack applications, backend systems, and
            software that integrates with real-world hardware.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Projects
            </a>

            <a
              href="/DongtaiHuang_McGill_Resume_Nouvere.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl md:h-[500px] md:w-[400px]">
            <Image
              src="/profile.png"
              alt="Dongtai Huang"
              fill
              priority
              sizes="(max-width: 768px) 340px, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="aboutme"
        className="mx-auto max-w-6xl scroll-mt-24 border-t border-slate-800 px-6 py-24"
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
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
                alt="Dongtai Huang at Niagara Falls"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-slate-400">
              I&apos;m a Software Engineering student at McGill University with
              experience building full-stack applications, backend systems, and
              software that interacts with real-world hardware.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I enjoy learning new technologies, solving practical engineering
              problems, and building projects that are useful beyond the
              classroom. I&apos;m especially interested in software engineering,
              backend development, cloud technologies, and systems development.
            </p>

            <div className="mt-10 border-t border-slate-800 pt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Beyond coding
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-400">
                I&apos;m an outgoing person who enjoys spending time with friends
                and exploring new places around Montreal. Music is a big part of
                my life — I play drums and listen to hip-hop, rock, R&amp;B, and
                indie music.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                I&apos;m also a big movie fan. Some of my favorites are{" "}
                <span className="text-slate-200">Pulp Fiction</span>,{" "}
                <span className="text-slate-200">Manchester by the Sea</span>,{" "}
                <span className="text-slate-200">Whiplash</span>, and{" "}
                <span className="text-slate-200">Kung Fu Hustle</span>.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Outside of that, I love discovering cafés, and one of my personal
                goals is to explore as many cafés in Montreal as possible.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "🥁 Drums",
                  "🎧 Hip-Hop",
                  "🎸 Rock",
                  "🎶 R&B",
                  "🌙 Indie",
                  "🎬 Movies",
                  "☕ Cafés",
                  "👥 Friends",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold">
            Technologies I work with
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "Python",
              "React",
              "TypeScript",
              "Next.js",
              "Vue.js",
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

      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="scroll-mt-24 border-t border-slate-800 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Education
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Academic background
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              My academic journey across software engineering, mathematics,
              physics, and engineering design.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {/* McGill */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    Aug 2023 – Aug 2027
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    McGill University
                  </h3>

                  <p className="mt-1 text-lg font-medium text-slate-300">
                    Bachelor of Engineering — Software Engineering Co-op
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Montreal, Quebec, Canada
                  </p>
                </div>

                <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Current
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>• Hugh Brock Scholarship recipient.</li>

                    <li>
                      • Coursework includes Object-Oriented Programming,
                      Algorithms &amp; Data Structures, Software Testing, and
                      Agile development.
                    </li>

                    <li>
                      • Engineering Internship / Co-op Program.
                    </li>

                    <li>
                      • Member of McGill Symphonic Band Club — Percussion.
                    </li>

                    <li>
                      • Member of McGill Poker Studies Club.
                    </li>

                    <li>
                      • Volunteer at McGill TechFair 2026.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Focus Areas
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Algorithms",
                      "Data Structures",
                      "Software Testing",
                      "Full-Stack Development",
                      "Engineering Design",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* SCIE */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  Aug 2021 – Jun 2023
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Shenzhen College of International Education
                </h3>

                <p className="mt-1 text-lg font-medium text-slate-300">
                  A-Level
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Shenzhen, China
                </p>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>
                      • Studied Mathematics, Further Mathematics, Physics, and
                      Chemistry.
                    </li>

                    <li>
                      • Achieved 3 A* grades in Mathematics, Physics, and
                      Chemistry, plus an A in Further Mathematics.
                    </li>

                    <li>
                      • Bronze award recipient in the British Physics Olympiad.
                    </li>

                    <li>
                      • Participated in student volunteering and school
                      activities.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Subjects
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Mathematics",
                      "Further Mathematics",
                      "Physics",
                      "Chemistry",
                    ].map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Dulwich */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  Aug 2019 – Jun 2021
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Dulwich International High School Programme Hengqin
                </h3>

                <p className="mt-1 text-lg font-medium text-slate-300">
                  IGCSE
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Zhuhai, China
                </p>
              </div>

              <div className="mt-7">
                <ul className="space-y-4 leading-7 text-slate-400">
                  <li>
                    • Completed IGCSE studies with 7 A* and 1 A.
                  </li>

                  <li>
                    • Served as a House Representative during Year 11.
                  </li>

                  <li>
                    • Participated in Track &amp; Field Club and Design Club.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 border-t border-slate-800 px-6 py-24"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Some things I&apos;ve built
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          A selection of projects that demonstrate my experience with
          full-stack development, backend systems, databases, and
          hardware-software integration.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Project 1 */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
            <h3 className="text-xl font-semibold">
              Meal Ticket Management System
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              Full-stack system for managing meal ticket applications,
              issuance, card-based confirmation, usage, expiration, and
              reporting.
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
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
            <h3 className="text-xl font-semibold">
              Airline Management System
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              Full-stack airline platform supporting flight search, booking,
              crew assignments, role-based access, and airline operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Vue.js",
                "PostgreSQL",
                "REST API",
              ].map((tech) => (
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
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
            <h3 className="text-xl font-semibold">
              AquaX Autonomous Robotic Firefighter
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              Autonomous robotic system designed to navigate, detect simulated
              fires and obstacles, deploy fire-suppression materials, and return
              safely to base.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python",
                "Robotics",
                "Sensors",
                "Hardware",
              ].map((tech) => (
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

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="scroll-mt-24 border-t border-slate-800 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Where I&apos;ve worked
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Practical software engineering experience across full-stack
              development, enterprise systems, hardware integration, testing,
              and automation.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            {/* Eastcompeace */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    May 2026 – Aug 2026
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Eastcompeace Technology Co., Ltd
                  </h3>

                  <p className="mt-1 text-lg font-medium text-slate-300">
                    Software Developer Intern
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Zhuhai, China
                  </p>
                </div>

                <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Full-Stack Development
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>
                      • Developed a full-stack Meal Ticket Management System
                      using Java, Spring Boot, React, TypeScript, MySQL, and REST
                      APIs.
                    </li>

                    <li>
                      • Integrated physical smart-card readers with the web
                      application for real-time employee identification and
                      ticket confirmation.
                    </li>

                    <li>
                      • Diagnosed and resolved issues across frontend, backend,
                      database, network, and hardware components through
                      integration and end-to-end testing.
                    </li>

                    <li>
                      • Translated business requirements and supervisor feedback
                      into functional and UI improvements.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Spring Boot",
                      "React",
                      "TypeScript",
                      "MySQL",
                      "REST API",
                      "JPA",
                      "MyBatis-Plus",
                      "Maven",
                      "Swagger",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/projects/meal-ticket-system"
                    className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    View internship project →
                  </a>
                </div>
              </div>
            </article>

            {/* Jiantai */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    May 2024 – Aug 2024
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Jiantai Construction Co., Ltd
                  </h3>

                  <p className="mt-1 text-lg font-medium text-slate-300">
                    Software Developer Intern
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Zhuhai, China
                  </p>
                </div>

                <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Enterprise Software
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>
                      • Enhanced Java-based ERP functionality integrated with
                      Oracle systems to support internal business workflows.
                    </li>

                    <li>
                      • Worked with enterprise data and internal process
                      automation.
                    </li>

                    <li>
                      • Automated Excel file classification and report
                      generation through AI-assisted scripting.
                    </li>

                    <li>
                      • Helped reduce repetitive manual processing through
                      automation and software improvements.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Oracle",
                      "ERP",
                      "Automation",
                      "Excel",
                      "Scripting",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Additional Experience */}
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Additional Experience
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Other professional experience
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                Roles that strengthened my communication, teamwork, attention
                to detail, and ability to work effectively in fast-paced
                environments.
              </p>
            </div>

            {/* Manga Bistro */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    Jun 2025 – Oct 2025
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Manga Bistro
                  </h3>

                  <p className="mt-1 text-lg font-medium text-slate-300">
                    Server
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Montreal, Quebec, Canada
                  </p>
                </div>

                <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Customer Service
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>
                      • Developed strong interpersonal skills by interacting
                      with hundreds of customers daily and communicating clearly
                      about orders, dietary needs, and wait times.
                    </li>

                    <li>
                      • Supported a high-volume restaurant team serving 300+
                      guests daily, helping ensure accurate table coordination
                      and timely service.
                    </li>

                    <li>
                      • Worked effectively under pressure while handling
                      changing customer needs and coordinating with coworkers.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Skills
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Communication",
                      "Teamwork",
                      "Problem Solving",
                      "Customer Service",
                      "Time Management",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Wanzhou */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-700 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    Jul 2021 – Aug 2021
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Wanzhou Optoelectronic Technology Co., Ltd
                  </h3>

                  <p className="mt-1 text-lg font-medium text-slate-300">
                    Factory Intern
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Zhuhai, Guangdong, China
                  </p>
                </div>

                <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  Manufacturing
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <ul className="space-y-4 leading-7 text-slate-400">
                    <li>
                      • Operated specialized machinery for LED bulb processing
                      while following safety procedures and maintaining
                      production accuracy.
                    </li>

                    <li>
                      • Conducted quality inspections to identify and remove
                      defective or damaged LED components.
                    </li>

                    <li>
                      • Collaborated with coworkers and supervisors to maintain
                      a smooth workflow in a fast-paced production environment.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Skills
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Quality Control",
                      "Manufacturing",
                      "Attention to Detail",
                      "Teamwork",
                      "Safety",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-800 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let&apos;s connect
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I&apos;m always interested in learning about software engineering
              opportunities, internships, and projects where I can build useful
              products and continue growing as an engineer.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:dongtaihuang_jobs@outlook.com"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/dongtai-huang-0b4463328"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/DongtaiHuang"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Dongtai Huang. All rights reserved.</p>

          <p>
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}