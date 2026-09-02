import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "CheckRegister",
    description:
      "A TypeScript based application with a Command Line User Interface designed to manage financial account transactions " +
      "and balances.  The application utilizes object oriented programming and local data persistence to allow users to record and " +
      "maintain financial transactions.",
    technologies: [
      "TypeScript",
      "Node.js",
      "npm",
      "Vitest",
      "ESLint",
      "Prettier",
      "tsx",
      "Github",
      "VS Code",
    ],
    link: "https://github.com/jsbowen79/CheckRegister",
  },
  {
    title: "CheckRegister2",
    description:
      "An updated version of CheckRegister that converts to C# programming language and adds database storage with Firestore. The" +
      "application utilizes object oriented programming, local data management, and Firestore backup to allow users to record and maintain " +
      "financial transactions.",
    technologies: [
      "C#",
      ".NET 10",
      "Google Cloud Firestore",
      "System.Text.Json",
      "GitHub",
      "VS Code",
    ],
    link: "https://github.com/jsbowen79/CheckRegister2",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&#39;m a full stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
