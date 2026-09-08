export default function FlightManagementPlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <a
          href="/#projects"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          ← Back to Projects
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Project
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          Flight Management Platform
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          A full-stack web application designed to manage flight-related
          information through a structured backend API, relational database,
          and user-facing interface.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "REST API",
            "HTML",
            "CSS",
            "JavaScript",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <h2 className="text-2xl font-bold">
              Overview
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              I developed this project as part of my coursework at McGill
              University. The goal was to build a web-based platform that could
              manage flight information while connecting a frontend interface
              to a Spring Boot backend and PostgreSQL database.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What I Built
            </h2>

            <ul className="mt-4 space-y-3 leading-8 text-slate-400">
              <li>
                • Developed backend functionality using Java and Spring Boot.
              </li>

              <li>
                • Created REST APIs for communication between the frontend and
                backend.
              </li>

              <li>
                • Used Spring Data JPA to manage application data and database
                operations.
              </li>

              <li>
                • Integrated PostgreSQL as the relational database.
              </li>

              <li>
                • Built frontend pages using HTML, CSS, and JavaScript.
              </li>

              <li>
                • Designed interface concepts and layouts using Figma.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Technical Challenges
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              One of the main challenges was making sure the frontend, REST API,
              and database worked together reliably. This required debugging API
              requests, validating data passed between different parts of the
              application, and keeping the database structure consistent with
              the backend models.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What I Learned
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              This project strengthened my understanding of full-stack
              development and helped me gain more experience with Spring Boot,
              REST APIs, relational databases, frontend-backend integration,
              and structuring a larger software project.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}