import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { search, category } = req.query;

    let whereClause = {};
    if (search) {
      whereClause = {
        ...whereClause,
        title: { contains: search as string, mode: "insensitive" },
      };
    }
    if (category && category !== "All") {
      whereClause = {
        ...whereClause,
        type: category as string,
      };
    }

    try {
      const events = await prisma.event.findMany({
        where: whereClause,
      });
      res.status(200).json(events);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: "Error fetching events" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
