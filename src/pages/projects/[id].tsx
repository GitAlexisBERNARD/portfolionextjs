import { GetStaticPaths, GetStaticProps } from 'next';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import type { Post } from '@prisma/client';
import MainLayout from '@/layouts/MainLayout';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type Props = {
  post: Post;
};

const UnPostid: React.FC<Props> = ({ post }) => {
  const contentObject = typeof post.content === 'string' ? JSON.parse(post.content) : post.content;
  return (
    <MainLayout>
      <div className="text-black p-8">
        <div className="container mx-auto">
          <h2 className="font-bold text-4xl mb-4">{post.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={contentObject.imageURL}
                alt={post.title}
                width={500}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
              <div className="mt-4">
                <div>
                  <hr></hr>
                  <p>Project needs</p>
                  <p className="text-xl mb-2">{contentObject.introPost}</p>
                </div>
                <p className="mb-2">{contentObject.technoPost}</p>
                <p className="mb-2">{contentObject.date}</p>
                <p>{contentObject.client}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between mb-4">
                  <div className='w-1/2'>
                    <div className='flex flex-row items-end '>
                      <h3 className="text-xl font-semibold">ABOUT</h3>
                      <hr className='border-black border-1 w-1/2 mb-2 px-6'/>
                    </div>
                    <p className="text-lg">{contentObject.introPost}</p>
                    <a href={contentObject.link} className="relative inline-block px-4 py-2 font-medium group mt-12">
                         <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-xl bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-xl"></span>
                        <span className="relative text-black group-hover:text-white">See the projet</span>
                  </a>
                  </div>
                  <div className='w-1/2'>
                    <div className='flex flex-row items-end '>
                      <h3 className="text-xl font-semibold">Skills</h3>
                      <hr className='border-black border-1 w-1/2 mb-2 px-6'/>
                    </div>
                    <p className="text-lg"></p>
                  </div>
                </div>
                <p className="mb-4">{contentObject.besoin}</p>
              </div>
              <div className="flex justify-end">
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
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
    where: { id: id }, 
  });

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};