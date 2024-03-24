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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sliderElement = document.querySelector(".slider");
    if (sliderElement) {
      gsap.to(".slider", {
        x: `-${sliderElement.clientWidth - window.innerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-1",
          start: "top top",
          end: "+=2500", 
          pin: true,
          pinSpacing: true,
          scrub: 1,
          markers: true,
        },
      });
    }
  }, []);

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
                <p className="text-xl mb-2">{contentObject.introPost}</p>
                <p className="mb-2">{contentObject.technoPost}</p>
                <p className="mb-2">{contentObject.date}</p>
                <p>{contentObject.client}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">About</h3>
                    <p className="text-lg">{contentObject.intro}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">SERVICES</h3>
                    <p className="text-lg">Hébergement, Nom de domaine, Webdesign</p>
                  </div>
                </div>
                <p className="mb-4">{contentObject.besoin}</p>
              </div>
              <div className="flex justify-end">
                <a href={contentObject.link} className="relative inline-block px-4 py-2 font-medium group">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-xl bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-xl"></span>
                  <span className="relative text-black group-hover:text-white">Button Text</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="section-1 lg:block hidden">
          <h1>Visuel du projet</h1>
          <div className="container">
            <div className="slider">
              <div className="cards">1</div>
              <div className="cards">2</div>
              <div className="cards">3</div>
              <div className="cards">4</div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        section h1 {
          font-size: 5.6rem;
        }
        section:nth-of-type(1) {
          top: 0;
          padding: 2rem;
        }
        header {
          font-size: 4.8rem;
          min-height: 40vh;
          background-color: rgb(222, 217, 225);
        }
        footer {
          color: #fff;
          font-size: 2.4rem;
          background-color: rgb(32, 31, 33);
          min-height: 50vh;
        }
        .slider .cards {
          width: 50vw;
          height: 40vh;
          display: flex;
          padding: 2rem;
          font-size: 4.8rem;
        }
        .cards:nth-of-type(even) {
          background-color: rgb(176, 172, 180) !important;
          color: #fff;
        }
        .cards:nth-of-type(odd) {
          color: #000;
          background-color: rgb(239, 235, 243) !important;
        }
        .container {
          overflow: hidden;
        }
        .slider {
          width: max-content;
          margin-top: 2.4rem;
          column-gap: 3.2rem;
          grid-auto-flow: column;
          display: grid;
        }
        section:nth-of-type(2) {
          background-color: rgb(223, 226, 234);
          font-size: 4.8rem;
        }
      `}</style>
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
    where: { id: id }, // Assurez-vous de convertir id en nombre si nécessaire
  });

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
