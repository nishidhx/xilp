import { read_work_exp } from "@/data/fetch";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchparams = request.nextUrl.searchParams;

    if (searchparams.get("view") == "1") {
      const work = read_work_exp();
      return NextResponse.json({
        message: "Work experiences fetched",
        url: request.url,
        work,
      });
    } else {
      const work = await prisma.experience.findMany({
        orderBy: { working: "desc" },
      });

      if (!work || work.length === 0) {
        return NextResponse.json({
          message: "No work experiences found",
          url: request.url,
          work: [],
        });
      }

      return NextResponse.json({
        message: "Work experiences fetched",
        url: request.url,
        work,
      });
    }
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
