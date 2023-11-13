import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params: {id: string}
}

export async function GET(request: NextRequest, {params}:Props) {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    });

    if(!issue) notFound();

    return NextResponse.json(issue);
}