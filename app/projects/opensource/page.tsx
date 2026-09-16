import { Project, getProjects } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";

export const dynamic = "force-dynamic";

export default async function openSourceProjects() {
  const projects: Project[] = await getProjects("opensource");
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}
