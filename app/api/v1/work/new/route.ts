import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    url: request.url,
    message: "GET requests to this route do not accept a JSON body. Use POST for creating or updating work entries."
  });
}

export async function POST(request: NextRequest) {
  try {
    const { role, companyName, skills, description, joining_date, place, working, id } = await request.json();

    if (!role || !companyName) {
      return NextResponse.json(
        { message: "Missing required fields: role and companyName" },
        { status: 400 }
      );
    }

    const data = {
      role,
      companyName,
      skills: skills ?? [],
      description: description ?? [],
      joining_date: joining_date ?? "",
      place: place ?? "",
      working: working ?? false
    };

    
    const experience = await prisma.experience.create({
        data: data
    })

    return NextResponse.json({ success: true, experience });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Server is under maintenance",
        url: request.url,
        error: err instanceof Error ? err.message : String(err)
      },
      { status: 500 }
    );
  }
}
