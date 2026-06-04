import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const work = await prisma.experience.findMany({})

    if (!work) {
        return NextResponse.json({
            message: "No work experiences found",
            url: request.url
        })
    }

    return NextResponse.json({
        message: "Work experiences fetched",
        url: request.url,
        work
    })

  } catch (err) {
    return NextResponse.json(
      {
        message: "Server is under maintenance",
        url: request.url,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
