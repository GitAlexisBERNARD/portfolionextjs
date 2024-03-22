// pages/api/projects.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Retourner une erreur si la méthode n'est pas POST
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Extraire les données du corps de la requête
    const projectData = req.body;

    // Insérer les données dans la base de données
    const savedProject = await prisma.project.create({
      data: projectData,
    });

    // Retourner les données du projet sauvegardé
    res.status(200).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong', error });
  }
}
