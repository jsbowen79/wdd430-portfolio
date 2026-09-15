import { NextResponse, NextRequest } from "next/server";
import { getProjects, Project } from "@/lib/projects-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type: string | null = searchParams.get("type");

  const results: Project[] = await getProjects(type);
  if (results.length != 0) {
    return NextResponse.json(results);
  } else {
    return NextResponse.json(
      { error: `404 No file of type ${type} was found.` },
      { status: 404 },
    );
  }
}
