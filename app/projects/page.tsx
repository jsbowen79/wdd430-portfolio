import ProjectList from "@/components/ProjectList";
import { Project } from "@/lib/projects-db";

export default async function projects() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
  );
  const projects: Project[] = await result.json();
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>

      <ProjectList projects={projects} />
    </main>
  );
}
