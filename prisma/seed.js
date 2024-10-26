import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      {
        title: "TechFest 2024",
        organizer: "CS Department",
        date: "2024-11-15", // Now as string
        type: "Conference",
        registrationOpen: true,
      },
      {
        title: "AI Workshop",
        organizer: "AI Club",
        date: "2024-11-20", // Now as string
        type: "Workshop",
        registrationOpen: true,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
