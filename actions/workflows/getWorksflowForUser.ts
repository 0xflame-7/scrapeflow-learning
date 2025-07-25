"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetWorksflowForUser() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  // return null;
  return prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}
