import { Project } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";

export const dynamic = "force-dynamic";

export default async function schoolProjects() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/projects?type=school`);
  const projects: Project[] = await response.json();
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}
