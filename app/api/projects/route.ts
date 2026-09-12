import { NextResponse, NextRequest } from "next/server";
import { projects, Project } from "@/lib/projects-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type: string | null = searchParams.get("type");
  if (type) {
    const results: Project[] = projects.filter(
      (project) => project.type === type,
    );
    if (results.length != 0) {
      return NextResponse.json(results);
    } else {
      return NextResponse.json(`404 No file of type ${type} was found.`);
    }
  } else {
    return NextResponse.json(projects);
  }
}
