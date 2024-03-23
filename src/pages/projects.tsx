import prisma from '@/lib/prisma';
import UnPost from '@/components/UnPost';
import type { Post } from '@prisma/client'
import ImageUpload from '@/components/UploadImage';
import MainLayout from '@/layouts/MainLayout';
export default function Posts({ posts }: { posts: Post[] }) {
  console.log({ posts });
  return (
    <div>
      <MainLayout>
        <h1>Posts Page</h1>
        {posts.map((post: Post) => (
          <UnPost key={post.id} title={post.title} content={post.content} id={post.id} published={post.published} authorId={post.authorId} />
        ))}
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await prisma.post.findMany({
    where: { published: false },
  });
  return {
    props: {
      posts
    }
  };
}
