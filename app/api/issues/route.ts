import prisma from "@/prisma/client";
import { Issue, Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchmea } from "../../validationSchemas";

export async function POST(request: NextRequest, data: Issue) {
  const body = await request.json();
  const validation = createIssueSchmea.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
