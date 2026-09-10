export default function FlightManagementPlatformPage() {
  const technologies = [
    "Java 21",
    "Spring Boot",
    "Vue.js 3",
    "Vite",
    "Tailwind CSS",
    "PostgreSQL",
    "Spring Data JPA",
    "Spring Security",
    "JWT",
    "REST API",
    "Pinia",
    "Axios",
    "Docker",
    "JUnit",
    "JaCoCo",
  ];

  const features = [
    "Flight search by departure, arrival, and date",
    "Customer signup and authentication",
    "Flight booking and payment workflow",
    "Booking cancellation and refunds",
    "Rewards and 5% overbooking logic",
    "Pilot and flight-attendant flight assignments",
    "Flight creation, editing, and cancellation",
    "Employee and policy management",
    "Operational statistics and dashboards",
    "Responsive web interface",
  ];

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
            Academic Project
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Airline Management System
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-400">
            A full-stack airline management platform developed for ECSE 321 at
            McGill University. The application supports flight search and
            booking, customer accounts, payments, crew assignments, flight
            management, administrative workflows, and operational statistics.
          </p>

          {/* Project Information */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Course</p>
              <p className="mt-1 font-semibold">ECSE 321</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Institution</p>
              <p className="mt-1 font-semibold">McGill University</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Role</p>
              <p className="mt-1 font-semibold">
                UML & Architecture Lead
              </p>
            </div>
          </div>

          {/* Technology badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-8">
            <a
              href="https://github.com/McGill-ECSE321-Fall2025/group-project-group-8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View Source on GitHub →
            </a>
          </div>
        </div>

        <div className="mt-20 space-y-20">

          {/* Overview */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Building an end-to-end airline platform
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              The Airline Management System was developed as a team software
              engineering project at McGill University. The goal was to create a
              complete web-based system serving multiple types of users,
              including customers, pilots, flight attendants, booking managers,
              and airline owners.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              The system combines a Vue.js frontend with a Spring Boot backend
              and PostgreSQL database. REST APIs connect the client and server,
              while authentication and authorization protect role-specific
              functionality.
            </p>
          </section>

          {/* User Flow Illustration */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              User Flow
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How users interact with the platform
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <div className="text-3xl">🔐</div>

                <h3 className="mt-3 text-lg font-semibold">
                  Authenticate
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Customers and airline staff sign in with role-based access.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <div className="text-3xl">✈️</div>

                <h3 className="mt-3 text-lg font-semibold">
                  Search Flights
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Search available flights by route and travel dates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <div className="text-3xl">💳</div>

                <h3 className="mt-3 text-lg font-semibold">
                  Book & Pay
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Select flights, create reservations, and complete payment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                <div className="text-3xl">📊</div>

                <h3 className="mt-3 text-lg font-semibold">
                  Manage Operations
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Staff manage flights, employees, crew assignments, and
                  statistics.
                </p>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Full-stack system architecture
            </h2>

            <div className="mt-10 flex flex-col items-center">
              {/* Frontend */}
              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">
                  Frontend
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Vue.js 3 + Vite + Tailwind CSS
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Pinia state management, Axios API requests, responsive views,
                  dashboards, and reusable Vue components
                </p>
              </div>

              <div className="my-4 text-2xl text-blue-400">
                ↓
              </div>

              {/* API */}
              <div className="rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300">
                REST API / Axios
              </div>

              <div className="my-4 text-2xl text-blue-400">
                ↓
              </div>

              {/* Backend */}
              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">
                  Backend
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Java 21 + Spring Boot
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Business logic, REST controllers, validation, Spring Security,
                  JWT authentication, and JPA persistence
                </p>
              </div>

              <div className="my-4 text-2xl text-blue-400">
                ↓
              </div>

              {/* Database */}
              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">
                  Database
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  PostgreSQL
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Customers, employees, flights, bookings, seats, and related
                  airline data
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What the platform supports
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-300"
                >
                  <span className="mr-3 text-blue-400">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Roles */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Role-Based System
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Multiple user workflows
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Customer
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Create an account, search for flights, book seats, complete
                  payment, review bookings, and cancel reservations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Pilot & Flight Attendant
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  View flights assigned to them through the airline management
                  system.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Booking Manager
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Create, edit, and cancel flights while assigning crew members
                  to scheduled flights.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Airline Owner
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Manage employees, policies, promotions, and review operational
                  statistics.
                </p>
              </div>
            </div>
          </section>

          {/* Development */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Development
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Engineering the application
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Backend & API
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>• Java 21 and Spring Boot backend</li>
                  <li>• REST API architecture</li>
                  <li>• Spring Data JPA and Hibernate</li>
                  <li>• Input validation and business logic</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Security
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>• Spring Security integration</li>
                  <li>• JWT-based authentication</li>
                  <li>• Role-specific application access</li>
                  <li>• Protected backend operations</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Frontend
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>• Vue.js 3 component-based interface</li>
                  <li>• Vite development environment</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• Pinia state management and Axios requests</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Testing & Deployment
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>• Unit and integration testing</li>
                  <li>• JUnit test infrastructure</li>
                  <li>• JaCoCo test coverage verification</li>
                  <li>• Docker configuration for the application</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Engineering Process */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Team Engineering
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Collaborative development workflow
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              The project used a lightweight Scrum/Kanban workflow with GitHub
              Issues and milestones. Development work was organized through
              feature branches and pull requests, with protected development
              and main branches used to maintain code quality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Scrum / Kanban",
                "GitHub Issues",
                "Feature Branches",
                "Pull Requests",
                "Code Reviews",
                "Milestones",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Technical Challenges */}
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
                  Full-stack integration
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Coordinating the Vue frontend, REST API, Spring Boot services,
                  and PostgreSQL database required consistent data models and
                  predictable request and response formats across every layer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Role-based functionality
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  The system needed different workflows for customers, crew,
                  managers, and owners. This required clear system architecture
                  and careful separation of functionality and access.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Managing shared system state
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Booking, seat availability, employee information, and user
                  sessions had to remain synchronized as users interacted with
                  different parts of the system.
                </p>
              </div>
            </div>
          </section>

          {/* Learning */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Reflection
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What I learned
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              This project strengthened my understanding of software
              architecture and full-stack application development. Working with
              multiple user roles and interconnected frontend, backend, security,
              and database layers showed me how architectural decisions affect
              the entire application.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              It also gave me experience working within a structured team
              development process using GitHub issues, branches, pull requests,
              testing, documentation, and iterative software delivery.
            </p>
          </section>

          {/* Repository */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-sm font-semibold text-blue-400">
              Open Source Repository
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Want to see the implementation?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              The complete project repository, including frontend and backend
              source code, project documentation, testing configuration, and
              software engineering deliverables, is publicly available on
              GitHub.
            </p>

            <a
              href="https://github.com/McGill-ECSE321-Fall2025/group-project-group-8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Explore the GitHub Repository →
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}