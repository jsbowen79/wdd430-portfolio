import { NextResponse } from "next/server";
import { getProjectById, Project } from "@/lib/projects-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const response = await params;
  const id = Number(response.id);

  if (Number.isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid Parameter.  Id must be a Number." },
      { status: 400 },
    );
  } else {
    const results: Project | null = await getProjectById(id);
    if (results) {
      return NextResponse.json(results);
    } else {
      return NextResponse.json(
        { error: `No Projects with id ${id} were found.` },
        { status: 404 },
      );
    }
  }
}
