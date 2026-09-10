import Image from "next/image";

export default function FireDetectionRobotPage() {
  const technologies = [
    "Python",
    "LEGO + BrickPi",
    "EV3 Sensors",
    "Odometry",
    "Gyro Feedback",
    "Ultrasonic Sensing",
    "Color Detection",
    "Hardware Integration",
  ];

  const metrics = [
    ["Correct room entry", "100%"],
    ["Return to base", "100%"],
    ["Emergency stop", "100%"],
    ["Obstacle avoidance", "80%"],
    ["Fire detection & extinguishing", "70%"],
    ["Mission under 3 minutes", "80%"],
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
            Academic Robotics Project
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            AquaX: Autonomous Robotic Firefighter System
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-400">
            An autonomous robotic firefighting system designed to navigate a
            simulated indoor environment, detect fires and obstacles, deploy
            fire-suppressing foam cubes, and return safely to base.
          </p>

          {/* Project Info */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Course</p>
              <p className="mt-1 font-semibold">ECSE 211</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Institution</p>
              <p className="mt-1 font-semibold">McGill University</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-500">Role</p>
              <p className="mt-1 font-semibold">Hardware Co-Lead</p>
            </div>
          </div>

          {/* Tech badges */}
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
        </div>

        <div className="mt-20 space-y-20">
          {/* Main visual */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Final Design
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Physical robot and digital twin
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <Image
                src="/aquax-final-design.png"
                alt="AquaX final robot design and LeoCAD digital twin"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              The final robot design was documented alongside a LeoCAD digital
              twin to support reproducibility and subsystem visualization.
            </p>
          </section>

          {/* Overview */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Building an autonomous response system
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              AquaX was developed as a five-week engineering design project.
              The robot was required to autonomously navigate a 1.2 m × 1.2 m
              environment, identify fire and obstacle zones, extinguish two
              simulated fires, avoid collisions, and return to its starting
              position.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              The final system combined navigation, obstacle avoidance, fire and
              zone detection, fire extinguishing, and software coordination into
              a single integrated robotic platform.
            </p>
          </section>

          {/* Design gallery */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Design Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Final hardware from multiple perspectives
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <Image
                  src="/aquax-design-views.png"
                  alt="AquaX multi-angle final design views"
                  width={900}
                  height={1100}
                  className="h-full w-full rounded-xl object-cover"
                />

                <div className="p-3">
                  <h3 className="font-semibold">
                    Multi-angle final design
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Physical and digital views were used to document the robot
                    structure, sensor placement, and subsystem integration.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <Image
                  src="/aquax-hardware-iteration.png"
                  alt="AquaX fire extinguishing hardware iteration"
                  width={900}
                  height={700}
                  className="h-full w-full rounded-xl object-cover"
                />

                <div className="p-3">
                  <h3 className="font-semibold">
                    Fire-extinguishing mechanism
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The final design integrated a rotating color-sensor arm,
                    tunnel structure, and motorized mechanism for deploying two
                    foam cubes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* System Flow */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              System Flow
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How the robot responds to its environment
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-5">
              {[
                ["📡", "Sense", "Read color, gyro, ultrasonic, and touch sensors."],
                ["🧠", "Decide", "Interpret sensor feedback and determine system state."],
                ["⚙️", "Navigate", "Move using odometry and gyro-assisted control."],
                ["🔥", "Extinguish", "Detect a fire and deploy a foam cube."],
                ["🏠", "Return", "Navigate back to the starting base."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
                >
                  <div className="text-3xl">{icon}</div>

                  <h3 className="mt-3 font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Integrated hardware and software
            </h2>

            <div className="mt-10 flex flex-col items-center">
              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">Sensors</p>

                <h3 className="mt-2 text-xl font-semibold">
                  Color + Gyro + Ultrasonic + Touch
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Environment sensing, orientation, obstacle detection, zone
                  classification, and emergency stop input
                </p>
              </div>

              <div className="my-4 text-2xl text-blue-400">↓</div>

              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">Software</p>

                <h3 className="mt-2 text-xl font-semibold">
                  Python State-Based Control
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Navigation, scanning, obstacle response, fire detection,
                  extinguishing, and emergency-stop coordination
                </p>
              </div>

              <div className="my-4 text-2xl text-blue-400">↓</div>

              <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-sm text-blue-400">Actuation</p>

                <h3 className="mt-2 text-xl font-semibold">
                  EV3 + NXT Motors
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Rear-wheel navigation, rotating color sensor, and
                  fire-suppression mechanism
                </p>
              </div>
            </div>
          </section>

          {/* What I worked on */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Development
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What I worked on
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Hardware Development
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Served as Hardware Co-Lead for the robot design.
                  </li>

                  <li>
                    • Helped construct and iterate the LEGO/BrickPi platform.
                  </li>

                  <li>
                    • Worked on motor, sensor, and subsystem placement.
                  </li>

                  <li>
                    • Improved structural stability through repeated redesigns.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Navigation & Testing
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Tested straight-line motion and distance accuracy.
                  </li>

                  <li>
                    • Evaluated stability and lateral drift across repeated
                    trials.
                  </li>

                  <li>
                    • Participated in fire and zone detection testing.
                  </li>

                  <li>
                    • Helped refine hardware based on measured test results.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Fire & Zone Detection
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Worked with the rotating color-sensor mechanism.
                  </li>

                  <li>
                    • Tested red fire, green furniture, and restricted-zone
                    detection.
                  </li>

                  <li>
                    • Investigated vibration and sensor accuracy issues.
                  </li>

                  <li>
                    • Tuned hardware placement to improve detection reliability.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Fire Suppression
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-400">
                  <li>
                    • Helped test the motorized foam-cube deployment mechanism.
                  </li>

                  <li>
                    • Evaluated automatic reloading and sandbag release.
                  </li>

                  <li>
                    • Identified tunnel friction and alignment issues.
                  </li>

                  <li>
                    • Iterated the physical design to improve reliability.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Testing
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Final system performance
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              The completed system was evaluated through component, subsystem,
              integration, and full-system testing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {metrics.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <p className="text-3xl font-bold text-blue-400">{value}</p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical challenges */}
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
                  Sensor reliability
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Environmental lighting, vibration, and sensor placement could
                  significantly affect color classification. The hardware and
                  detection strategy had to be repeatedly adjusted to improve
                  consistency.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Reliable navigation
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  Ultrasonic-only navigation performed poorly in cluttered
                  environments. Testing showed that odometry combined with
                  gyro-assisted rotation produced substantially more reliable
                  room entry.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">
                  Mechanical fire suppression
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  The foam-cube deployment mechanism occasionally jammed or
                  misaligned. Multiple tunnel and arm iterations were tested to
                  reduce friction and improve targeting.
                </p>
              </div>
            </div>
          </section>

          {/* Engineering Process */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Engineering Process
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Iterative design and testing
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {["Design", "Build", "Test", "Analyze", "Redesign", "Retest"].map(
                (stage, index, array) => (
                  <div key={stage} className="flex items-center gap-3">
                    <div className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium">
                      {stage}
                    </div>

                    {index < array.length - 1 && (
                      <span className="text-blue-400">→</span>
                    )}
                  </div>
                )
              )}
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              The robot went through several hardware and software iterations.
              Testing results directly influenced changes to sensor placement,
              weight distribution, navigation strategy, and the extinguishing
              mechanism.
            </p>
          </section>

          {/* Reflection */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Reflection
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What I learned
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
              AquaX gave me hands-on experience with hardware-software
              integration and showed me how engineering decisions across
              mechanical design, sensing, software, and testing influence one
              another.
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              The project also strengthened my ability to debug real-world
              systems where a failure may come from software logic, sensor
              noise, mechanical instability, calibration, or interactions
              between several components.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}