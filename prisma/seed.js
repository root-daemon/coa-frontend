// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const events = [
    {
      title: "TechFest 2024",
      organizer: "CS Department",
      date: "15 NOV",
      type: "Conference",
      registrationOpen: true,
    },
    {
      title: "AI Workshop",
      organizer: "AI Club",
      date: "20 NOV",
      type: "Workshop",
      registrationOpen: true,
    },
  ];

  for (const event of events) {
    await prisma.event.create({
      data: event,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
