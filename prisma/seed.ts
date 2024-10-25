import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      {
        title: "TechFest 2024",
        organizer: "CS Department",
        date: new Date("2024-11-15"),
        type: "Conference",
        registrationOpen: true,
      },
      {
        title: "AI Workshop",
        organizer: "AI Club",
        date: new Date("2024-11-20"),
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
