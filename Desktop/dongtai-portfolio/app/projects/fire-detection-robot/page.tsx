export default function FireDetectionRobotPage() {
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
          Fire Detection & Extinguishing Robot
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-400">
          An autonomous robotics project designed to detect fire, navigate
          around obstacles, and respond using integrated sensors, motors, and
          control logic.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Python", "Robotics", "Sensors", "Motors", "Hardware"].map(
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
            <h2 className="text-2xl font-bold">
              Overview
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              I developed this project at McGill University as part of a
              hardware-software integration project. The objective was to build
              a robot capable of detecting a fire source, navigating through its
              environment, avoiding obstacles, and responding automatically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What I Built
            </h2>

            <ul className="mt-4 space-y-3 leading-8 text-slate-400">
              <li>
                • Programmed the robot&apos;s navigation and control logic using
                Python.
              </li>

              <li>
                • Integrated motors and sensors for movement, obstacle detection,
                and environmental sensing.
              </li>

              <li>
                • Implemented logic that allowed the robot to react to sensor
                readings in real time.
              </li>

              <li>
                • Developed obstacle-avoidance behavior to improve autonomous
                navigation.
              </li>

              <li>
                • Tested and adjusted movement and detection behavior across
                multiple trials.
              </li>

              <li>
                • Improved the stability and accuracy of the robot through
                repeated testing and debugging.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Technical Challenges
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              One of the main challenges was dealing with inconsistent sensor
              readings and translating those readings into reliable movement.
              Small changes in the environment could affect the robot&apos;s
              behavior, so I had to repeatedly test the system and adjust the
              navigation and detection logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Testing & Debugging
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              I tested the robot under different movement and obstacle
              conditions and used the results to improve navigation stability,
              detection accuracy, and overall reliability. This involved
              observing failures, adjusting control logic, and repeating tests
              until the behavior became more consistent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What I Learned
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              This project gave me hands-on experience with hardware-software
              interaction and showed me how different real-world debugging can
              be compared with purely software-based development. I also gained
              experience working with sensors, motors, control logic, testing,
              and autonomous system behavior.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}