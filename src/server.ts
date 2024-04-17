import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/", async (_request, response) => {
  await prisma.user.findUnique({ where: { email: "johndoe@example.com" } });

  return response.status(200).json({ message: "hello world" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
