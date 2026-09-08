export default function MealTicketSystemPage() {
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
          Meal Ticket Management System
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          A full-stack meal ticket management platform built to handle
          applications, ticket issuance, card-based confirmation, ticket usage,
          expiration, and reporting.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Java", "Spring Boot", "React", "TypeScript", "MySQL"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <h2 className="text-2xl font-bold">Overview</h2>

            <p className="mt-4 leading-8 text-slate-400">
              I worked on this system during my software development internship.
              The platform manages the lifecycle of employee meal tickets, from
              application and issuance to physical card confirmation and final
              usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">What I Built</h2>

            <ul className="mt-4 space-y-3 leading-8 text-slate-400">
              <li>
                • Developed backend REST APIs using Java and Spring Boot.
              </li>

              <li>
                • Built frontend interfaces using React and TypeScript.
              </li>

              <li>
                • Integrated MySQL for storing applications, tickets, usage
                records, and device information.
              </li>

              <li>
                • Implemented card-reader workflows for confirming ticket
                collection and usage.
              </li>

              <li>
                • Added automatic ticket expiration and status synchronization.
              </li>

              <li>
                • Built reporting functionality for tracking ticket activity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Technical Challenges</h2>

            <p className="mt-4 leading-8 text-slate-400">
              One of the main challenges was integrating the software with a
              physical card-reader service. I worked through issues involving
              device connectivity, dynamic IP addresses, polling behavior, and
              keeping frontend state synchronized with backend ticket status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">What I Learned</h2>

            <p className="mt-4 leading-8 text-slate-400">
              This project gave me practical experience building a complete
              full-stack system and helped me improve my understanding of REST
              API design, database workflows, frontend-backend integration, and
              debugging software that interacts with external hardware.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}