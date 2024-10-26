import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      select: {
        id: true,
        title: true,
        organizer: true,
        date: true,
        type: true,
        registrationOpen: true,
      },
    });

    // Transform the date to string format in the response
    const formattedEvents = events.map((event) => ({
      ...event,
      date: event.date.toString().split("T")[0], // This will give you 'YYYY-MM-DD' format
    }));

    return NextResponse.json(
      { message: "Events retrieved successfully", data: formattedEvents },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving events:", error);
    return NextResponse.json(
      { message: "Failed to retrieve events", error: error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
