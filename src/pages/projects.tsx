import prisma from '@/lib/prisma';
import UnPost from '@/components/UnPost';
import type { Post } from '@prisma/client'
import ImageUpload from '@/components/UploadImage';
import MainLayout from '@/layouts/MainLayout';
export default function Posts({ posts }: { posts: Post[] }) {
  console.log({ posts });
  return (
    
    <MainLayout>
      <h1 className="text-2xl font-bold text-center my-8 linkhover">Projects</h1>
      <div className='lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid p-10'>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <UnPost
              title={post.title}
              content={post.content}
              id={post.id}
              published={post.published}
              authorId={post.authorId}
            />
          </div>
        ))}
      </div>

    </MainLayout>

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