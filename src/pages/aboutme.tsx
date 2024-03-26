import { useEffect, useRef } from "react";
import gsap from "gsap";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

export default function About() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { duration: 1, x: -50, opacity: 0 });
    gsap.from(contentRef.current, {
      duration: 1,
      delay: 0.5,
      x: -100,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(skillsRef.current, { opacity: 1, y: 50, duration: 1 });
            gsap.to(imageRef.current, { opacity: 1, x: 0, duration: 1 });
          }
        });
      },
      { threshold: 0.5 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: "React", logo: "/logos/react.png" },
    { name: "VueJs", logo: "/logos/Vue.png" },
    { name: "NextJs", logo: "/logos/next-js.svg" },
    { name: "Supabase", logo: "/logos/supabase.webp " },
    { name: "Pocketbase", logo: "/logos/pockerbase.png" },
    { name: "Python", logo: "/logos/Python.png" },
    { name: "TailwindCSS", logo: "/logos/tailwindcss.webp" },
    { name: "Typescript", logo: "/logos/typescript.webp" },
    { name: "Wordpress", logo: "/logos/wordpress.webp" },
    { name: "Adobe Creative Cloud", logo: "/logos/Adobe.png" },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col m-6 gap-32 mt-20 lg:grid grid-cols-12 lg:gap-4 lg:m-auto lg:gap-y-36 !mb-8">
        <div className="col-start-2 col-span-10 flex flex-col lg:grid grid-cols-10 gap-4 lg:p-20">
          <h1 className="capitalize font-ClashGroteskExtraLight text-5xl lg:text-9xl lg:col-span-5 lg:flex items-center">
            Alexis Bernard
          </h1>
          <div className="lg:flex justify-end lg:col-start-6 lg:col-span-5">
            <Image
              src="/images/alexis2.jpg"
              alt="Alexis Bernard"
              width={500}
              height={300}
              className="rounded-lg lg:col-start-6 lg:col-span-5 lg:w-4/5"
            />
          </div>
        </div>
        <p className="font-IntelOneLight lg:col-start-2 col-span-10 lg:text-3xl">
  I am a <span className="font-IntelOneBold">web developer</span> passionate about
  creating captivating and high-performance user experiences. With
  strong expertise in <span className="font-IntelOneBold">JavaScript</span>, <span className="font-IntelOneBold">React</span>, and now <span className="font-IntelOneBold">Next.js</span>, I
  strive to build modern and responsive web applications.
</p>

        <div className="border-t border-white pt-6 lg:col-start-2 col-span-10">
          <h2 className="font-ClashGroteskRegular text-4xl lg:text-6xl">MMI Montbéliard</h2>
          <p className="font-IntelOneMedium text-xl lg:text-2xl">2022 - 2025</p>
        </div>
        <div className="border-t border-white pt-6 lg:col-start-2 col-span-10">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="border-white border py-3 px-6 rounded-xl uppercase font-ClashGroteskMedium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}