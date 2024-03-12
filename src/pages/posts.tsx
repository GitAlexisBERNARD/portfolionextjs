import prisma from '@/lib/prisma';
import UnPost from '@/components/UnPost';
import type { Post } from '@prisma/client'
import Upload from '@/components/UploadImage';

export default function Posts({ posts }: { posts: Post[] }) {
    console.log({ posts });
    return (
        <div>
            <h1>Posts Page</h1>
            {posts.map((post: Post) => (
                <UnPost key={post.id} id={post.id} title={post.title} content={post.content} authName={post.author.name} />
            ))}
                    <section>
                            <Upload/>
                    </section>      
        </div>
            
    );
}

export async function getStaticProps() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return {
    props: {
      posts
    }
  };
}
