export default function MealTicketSystemPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        {/* Back */}
        <a
          href="/#projects"
          className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
        >
          ← Back to Projects
        </a>

        {/* Hero */}
        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Internship Project
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Meal Ticket Management System
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-400">
            A full-stack internal enterprise application built to automate
            employee meal ticket applications, issuance, collection, usage,
            expiration, device integration, and reporting.
          </p>

          {/* Project info */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Role</p>
              <p className="mt-1 font-semibold">Software Developer Intern</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Project Type</p>
              <p className="mt-1 font-semibold">
                Internal Enterprise Application
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Environment</p>
              <p className="mt-1 font-semibold">Company Intranet</p>
            </div>
          </div>

          {/* Tech */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Java 17",
              "Spring Boot",
              "React",
              "TypeScript",
              "MySQL",
              "REST API",
              "JPA",
              "Maven",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-20">
          {/* Overview */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Automating the meal ticket lifecycle
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              During my software development internship, I worked on a complete
              meal ticket management platform used to manage employee meal
              ticket workflows. The system connected a React frontend,
              Spring Boot backend, MySQL database, and physical card-reader
              terminals.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              The application handled the entire ticket lifecycle, from an
              employee submitting an overtime meal request to ticket generation,
              collection, usage, automatic expiration, and statistical
              reporting.
            </p>
          </section>

          {/* Architecture */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How the system was structured
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <p className="text-sm text-blue-400">Frontend</p>
                <h3 className="mt-2 font-semibold">React + TypeScript</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  User interfaces, applications, confirmations, and reports
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <p className="text-sm text-blue-400">Backend</p>
                <h3 className="mt-2 font-semibold">Spring Boot</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  REST APIs, validation, business rules, and ticket workflows
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <p className="text-sm text-blue-400">Database</p>
                <h3 className="mt-2 font-semibold">MySQL</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Applications, tickets, usage records, and device data
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <p className="text-sm text-blue-400">Hardware</p>
                <h3 className="mt-2 font-semibold">Card Reader</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Employee identification and ticket confirmation
                </p>
              </div>
            </div>
          </section>

          {/* What I Built */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Development
            </p>

            <h2 className="mt-3 text-3xl font-bold">What I built</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Backend & API Development
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>• Developed REST APIs using Java and Spring Boot.</li>
                  <li>
                    • Implemented application, ticket, collection, usage, and
                    device workflows.
                  </li>
                  <li>
                    • Added validation rules for dates, duplicate requests, and
                    ticket status.
                  </li>
                  <li>
                    • Implemented automatic expiration and status
                    synchronization.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Frontend Development
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Built interfaces using React, TypeScript, and Ant Design.
                  </li>
                  <li>
                    • Developed application, collection, usage, and reporting
                    pages.
                  </li>
                  <li>
                    • Added filtering, validation, status indicators, and record
                    tables.
                  </li>
                  <li>
                    • Improved UI consistency and usability throughout the
                    system.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Hardware Integration
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Integrated physical card-reader terminals with the web
                    application.
                  </li>
                  <li>
                    • Implemented card detection and employee ticket lookup.
                  </li>
                  <li>
                    • Added device health checks and dynamic device selection.
                  </li>
                  <li>
                    • Managed polling behavior and frontend state during card
                    interactions.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Database & Reporting
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Used MySQL to store applications, tickets, usage records,
                    and device information.
                  </li>
                  <li>
                    • Worked with Spring Data JPA and MyBatis-Plus.
                  </li>
                  <li>
                    • Built personal, department, monthly, and ticket-type
                    statistics.
                  </li>
                  <li>
                    • Implemented reporting and export functionality.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lifecycle */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Business Logic
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Ticket lifecycle
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3">
                Pending Collection
              </div>

              <span className="text-blue-400">→</span>

              <div className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3">
                Collected
              </div>

              <span className="text-blue-400">→</span>

              <div className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3">
                Used
              </div>

              <span className="text-slate-500">or</span>

              <div className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3">
                Invalid / Expired
              </div>
            </div>

            <p className="mt-6 max-w-4xl leading-8 text-slate-400">
              Tickets automatically became invalid when their collection
              deadline passed. The system also prevented invalid actions such as
              deleting collected tickets, using expired tickets, or submitting
              duplicate applications for the same employee and date.
            </p>
          </section>

          {/* Challenges */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Problem Solving
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Technical challenges
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Card-reader connectivity
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  One major challenge was connecting the application to physical
                  card readers on the internal network. I debugged issues
                  involving device IP addresses, health endpoints, and
                  connectivity, then changed the system to dynamically obtain
                  device connection information instead of relying on
                  hard-coded addresses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Polling & frontend state
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Card detection required frequent polling without repeatedly
                  processing the same card. I implemented behavior that paused
                  polling after card detection and automatically resumed when
                  the card was removed.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Ticket status synchronization
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Ticket and application records needed to remain consistent
                  throughout collection, usage, expiration, cancellation, and
                  reporting workflows. I implemented business rules and status
                  synchronization to keep these records aligned.
                </p>
              </div>
            </div>
          </section>

          {/* What I Learned */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Reflection
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What I learned
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              This project gave me hands-on experience building a complete
              full-stack system in a real enterprise environment. I improved my
              understanding of REST API design, relational databases,
              frontend-backend integration, business-rule implementation, and
              debugging software that interacts with external hardware.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              It also taught me how important system-level thinking is when
              multiple components — frontend, backend, database, hardware, and
              business rules — must work reliably together.
            </p>
          </section>

          {/* Confidentiality */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold text-blue-400">
              Project Confidentiality
            </p>

            <p className="mt-3 leading-7 text-slate-400">
              This project was developed within a company intranet environment.
              Source code, internal data, and system screenshots are therefore
              not publicly available.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}