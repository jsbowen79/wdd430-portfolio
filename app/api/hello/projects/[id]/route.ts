import { NextResponse } from "next/server";
import { Project, projects } from "@/lib/projects-db";

export default function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid Parameter.  Id must be a Number." },
      { status: 400 },
    );
  } else {
    const results: Project[] = projects.filter(
      (project: Project) => project.id === id,
    );
    if (results.length > 0) {
      return NextResponse.json(results);
    } else {
      return NextResponse.json(
        { error: `No Projects with id ${id} were found.` },
        { status: 404 },
      );
    }
  }
}
