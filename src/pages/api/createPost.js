// src/pages/api/createPost.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { nomPost, content } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title: nomPost,
        content, 
      },
    });

    res.status(200).json(newPost);
  } catch (error) {
    console.error('Erreur lors de la création du post', error);
    res.status(500).json({ error: 'Erreur lors de la création du post' });
  }
}