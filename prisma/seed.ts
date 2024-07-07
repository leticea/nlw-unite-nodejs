import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "2902fe49-8b27-411a-8d69-62a67d6ec968",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "An event for devs passionate about code!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect;
});
