
import React from 'react';
import UnPost from './UnPost';
import type { Post } from '@prisma/client';
import ImageUpload from './UploadImage';

type PostListProps = {
  posts: Post[];
  onImageUpload: (url: string) => void;
};

const PostList: React.FC<PostListProps> = ({ posts, onImageUpload }) => {
  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <UnPost key={post.id} {...post} />
      ))}
      <section>
        <ImageUpload onUpload={onImageUpload} />
      </section>
    </div>
  );
};

export default PostList;
