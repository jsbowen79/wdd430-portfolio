import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default function loading() {
  return (
    <main className="max-w-4x1 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>

      <section className="grid gap-4 md:grid-cols-2">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </section>
    </main>
  );
}
