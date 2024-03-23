import { GetStaticPaths, GetStaticProps } from 'next';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import type { Post } from '@prisma/client';

type Props = {
  post: Post;
};

const UnPostid: React.FC<Props> = ({ post }) => {
  // Essayez de parser post.content comme JSON si c'est une chaîne, sinon utilisez-le directement
  const contentObject = typeof post.content === 'string' ? JSON.parse(post.content) : post.content;

  return (
    <div>
      <h2>{post.title}</h2>
        <p>{contentObject.introPost}</p>
        <p>{contentObject.technoPost}</p>
        <p>{contentObject.date}</p>
        <p>{contentObject.client}</p>
      <Image
        src={contentObject.imageURL}
        alt={post.title}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
};

export default UnPostid;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: { id: true },
  });
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
  const { id } = context.params!;
  const post = await prisma.post.findUnique({
    where: { id: id }, // Assurez-vous de convertir id en nombre si nécessaire
  });

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
