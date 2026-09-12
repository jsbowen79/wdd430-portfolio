import { Project } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";

export default async function openSourceProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?type=opensource`,
  );
  const projects: Project[] = await response.json();
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}
