import ProjectList from "@/components/ProjectList";
import { fetchFilteredProjects } from "@/lib/projects-db";
import { ProjectSearch } from "@/components/ProjectSearch";

export const dynamic = "force-dynamic";
export default async function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <ProjectSearch />
      <ProjectList projects={projects} />
    </main>
  );
}
