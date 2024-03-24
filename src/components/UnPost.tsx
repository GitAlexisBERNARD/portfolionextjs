// components/UnPost.tsx
import type { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function UnPost({ title, content, id,  }: Post ) {
  const contentObject = typeof content === 'string' ? JSON.parse(content) : content;

  return (
    <div> 
      <Link href={`/projects/${id}`}>
        <h2>{title}</h2>
      </Link>
      <Image
        src={contentObject.imageURL}
        alt={title}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
}