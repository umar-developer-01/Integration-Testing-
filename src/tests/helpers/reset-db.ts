import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clearDb() {
  await prisma.$transaction([prisma.request.deleteMany()]);
}

// if there are multiple tables, then either I want all the table to be deleted or none to be deleted in the transaction
