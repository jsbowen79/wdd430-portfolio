import { getProjects, Project } from "@/lib/projects-db";
import ProjectList from "./ProjectList";

export default async function LoadSchoolProjects() {
  const projects = await getProjects("school");

  return <ProjectList projects={projects} />;
}
