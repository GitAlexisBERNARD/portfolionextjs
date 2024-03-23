// pages/api/projects.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const projectData = req.body;
    const savedProject = await prisma.project.create({
      data: projectData,
    });

    res.status(200).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error });
  }
}
