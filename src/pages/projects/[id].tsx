import { GetStaticPaths, GetStaticProps } from "next";
import prisma from "@/lib/prisma";
import Image from "next/image";
import type { Post } from "@prisma/client";
import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { VisitIcon } from "@/components/icons/VisitIcon";
import SkillsList from "@/components/SkillsList";
import Link from "next/link";

type Props = {
  post: Post;
};

const UnPostid: React.FC<Props> = ({ post }) => {
  const contentObject =
    typeof post.content === "string" ? JSON.parse(post.content) : post.content;
  return (
    <MainLayout>
      <div className="flex flex-col m-6 gap-16 mt-20 lg:grid grid-cols-12 lg:gap-4 lg:m-auto lg:gap-y-20">
        <div className="flex flex-col gap-4 col-start-2 col-span-10 lg:pt-28">
          <div className="flex justify-between items-center">
            <h1 className="font-ClashGroteskExtraLight text-3xl lg:text-6xl">{post.title}</h1>
            <a href={contentObject.lienprojet}>
            <VisitIcon />
            </a>
          </div>
          <Image
            src={contentObject.imageURL}
            alt={post.title}
            width={500}
            height={300}
            className="rounded-lg h-[60vh] w-auto object-cover lg:col-start-6 lg:col-span-5 "
          />
        </div>
        <div className="lg:col-start-2 lg:col-span-10">
          <SkillsList list={contentObject.technoPost} />
        </div>
        <p className="font-IntelOneLight lg:col-start-2 col-span-10 lg:text-3xl">{contentObject.introPost}</p>
        <div className="border-t border-white pt-6 lg:col-start-2 col-span-10">
          <h2 className="font-ClashGroteskRegular text-4xl lg:text-6xl">MMI MontbÃ©liard</h2>
          <p className="font-IntelOneLight text-xl lg:text-2xl">{contentObject.date}</p>
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

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  const { id } = context.params!;
  const post = await prisma.post.findUnique({
    where: { id: id },
  });

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};