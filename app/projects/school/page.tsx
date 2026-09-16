import { Suspense } from "react";
import LoadSchoolProjects from "@/components/LoadSchoolProjects";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export const dynamic = "force-dynamic";

export default function schoolProjects() {
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <Suspense fallback={<ProjectCardSkeleton />}>
        <LoadSchoolProjects />
        <LoadSchoolProjects />
        <LoadSchoolProjects />
      </Suspense>
    </main>
  );
}
