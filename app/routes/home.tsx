import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Suraj Singh Deo " },
    { name: "description", content: "Portfolio & Projects of Suraj Singh Deo" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">👋 Hi there, I'm Suraj Singh Deo</h1>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Surajsdeo15"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-black text-white rounded-lg shadow hover:opacity-80"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-singh-deo/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:opacity-80"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* About Me */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">🚀 About Me</h2>
        <p className="space-x-2">
          I'm a passionate <strong>Software Engineer</strong> from India focused
          on building <strong>modern web applications</strong> and{" "}
          <strong>innovative solutions</strong>.
          With expertise in{" "}
          <span className="text-sm text-white bg-blue-500 p-1 px-3 shadow shadow-black  rounded-br-xl  rounded-tr-2xl">
            React
          </span>
          <span className="text-sm text-white bg-green-500 p-1 px-3   rounded-bl-xl  rounded-tl-2xl shadow shadow-black">TypeScript</span> and various web technologies
          I love creating <strong>user-friendly applications</strong> that solve
          real-world problems.
        </p>
      </section>

      {/* Freelancing */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">💼 Freelancing Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🌐 Full-Stack Web Development</li>
          <li>🎨 UI/UX Design (Figma)</li>
          <li>⚡ Real-time Applications (Socket.IO, WebRTC)</li>
          <li>📊 Data Visualization & Monitoring</li>
        </ul>
        <p className="mt-4">
          💡 Available for freelance collaborations →{" "}
          <a
            href="https://www.linkedin.com/in/suraj-singh-deo/"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>{" "}
          | ✉️{" "}
          <a
            href="mailto:surajsinghdeo9@gmail.com"
            className="text-blue-600 underline"
          >
            surajsinghdeo9@gmail.com
          </a>
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">🚀 Featured Projects</h2>

        <div className="space-y-8">
          {/* Project 1 */}
          <div className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-bold">
              📝 DocumentSheet – Smart Supplement Paper Generator
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Designed and developed a supplement paper generation platform</li>
              <li>
                Built on the MERN stack with secure APIs and role-based
                authentication
              </li>
              <li>
                Integrated automated PDF generation, storage pipelines & custom
                templates
              </li>
              <li>
                Developed intuitive React + Tailwind frontend for easy management
              </li>
              <li>
                Deployed successfully across Karnataka’s exam departments
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-bold">
              🤖 Gomoku Game with AI (Play vs Computer)
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Full-stack Gomoku board game using MERN with AI opponent
              </li>
              <li>
                AI powered by heuristic evaluation & minimax algorithm
              </li>
              <li>Supports multiplayer (human vs human) & single-player</li>
              <li>Real-time game sync with Socket.IO</li>
              <li>
                Modern, responsive UI with React + Tailwind for smooth gameplay
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <div className="space-y-6">
          {/* Languages */}
          <div className="space-x-2">
            <span className="font-semibold text-xl text-white p-1 px-4 rounded-br-3xl rounded-tr-xl bg-red-600 shadow-xl">
              Languages
            </span>
            <span className="text-sm text-white bg-black p-1 px-3 rounded shadow">C</span>
            <span className="text-sm text-white bg-blue-600 p-1 px-3 rounded shadow">C++</span>
            <span className="text-sm text-white bg-red-600 p-1 px-3 rounded shadow">Java</span>
            <span className="text-sm text-white bg-orange-500 p-1 px-3 rounded shadow">JavaScript</span>
            <span className="text-sm text-white bg-green-600 p-1 px-3 rounded shadow">TypeScript</span>
          </div>

          {/* Frameworks */}
          <div className="space-x-2">
            <span className="font-semibold text-xl text-white p-1 px-4 rounded-br-xl rounded-tr-3xl bg-purple-600 shadow-xl">
              Frameworks
            </span>
            <span className="text-sm text-white bg-blue-500 p-1 px-3 rounded shadow">React</span>
            <span className="text-sm text-white bg-indigo-600 p-1 px-3 rounded shadow">Remix</span>
            <span className="text-sm text-white bg-red-500 p-1 px-3 rounded shadow">AngularJS</span>
            <span className="text-sm text-white bg-cyan-600 p-1 px-3 rounded shadow">TailwindCSS</span>
          </div>

          {/* Backend */}
          <div className="space-x-2">
            <span className="font-semibold text-xl text-white p-1 px-4 rounded-br-3xl rounded-tr-xl bg-green-700 shadow-xl">
              Backend
            </span>
            <span className="text-sm text-white bg-gray-800 p-1 px-3 rounded shadow">Node.js</span>
            <span className="text-sm text-white bg-yellow-600 p-1 px-3 rounded shadow">Express.js</span>
            <span className="text-sm text-white bg-pink-600 p-1 px-3 rounded shadow">NestJS</span>
          </div>

          {/* Database / DevOps */}
          <div className="space-x-2">
            <span className="font-semibold text-xl text-white p-1 px-4 rounded-br-xl rounded-tr-3xl bg-blue-800 shadow-xl">
              Database / DevOps
            </span>
            <span className="text-sm text-white bg-green-700 p-1 px-3 rounded shadow">MongoDB</span>
            <span className="text-sm text-white bg-blue-500 p-1 px-3 rounded shadow">Docker</span>
            <span className="text-sm text-white bg-gray-700 p-1 px-3 rounded shadow">Linux</span>
            <span className="text-sm text-white bg-yellow-500 p-1 px-3 rounded shadow">Elasticsearch</span>
            <span className="text-sm text-white bg-orange-600 p-1 px-3 rounded shadow">Grafana</span>
          </div>

          {/* Tools */}
          <div className="space-x-2">
            <span className="font-semibold text-xl text-white p-1 px-4 rounded-br-3xl rounded-tr-xl bg-pink-700 shadow-xl">
              Tools
            </span>
            <span className="text-sm text-white bg-purple-600 p-1 px-3 rounded shadow">Figma</span>
            <span className="text-sm text-white bg-gray-900 p-1 px-3 rounded shadow">Git</span>
            <span className="text-sm text-white bg-black p-1 px-3 rounded shadow">GitHub</span>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 mt-10">
        <p>
          Thanks for visiting my profile 🚀 | © {new Date().getFullYear()} Suraj
          Singh Deo
        </p>
      </footer>
    </div>
  );
}
