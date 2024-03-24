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
      gsap.from(contentRef.current, { duration: 1, delay: 0.5, x: -100, opacity: 0 });
      

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(skillsRef.current, { opacity: 1, y: 50, duration: 1 });
            gsap.to(imageRef.current, { opacity: 1, x: 0, duration: 1 });
          }
        });
      }, { threshold: 0.5 });
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
            <div className="container mx-auto px-4 py-8">
                <h1 ref={titleRef} className="text-4xl font-bold text-center mb-4">À propos de moi</h1>
                <div className="flex">
                    <div ref={contentRef} className="text-lg text-gray-700">
                    <p>Je suis un développeur web passionné par la création d&apos;expériences utilisateur captivantes et performantes. Avec une forte expertise en JavaScript, React, et maintenant Next.js, je m&apos;efforce de construire des applications web modernes et réactives.</p>
                    </div>
                    <div ref={imageRef} className="opacity-0 transform translate-x-20">
                        <Image src="/images/alexis.jpg" alt="Alexis" width={500} height={300} />
                    </div>
                    </div>
                    <h2 className="text-2xl font-bold">My Skills</h2>
                <div className="flex items-center mt-8 ml-32 mb-3">
                    <div ref={skillsRef} className="opacity-0 transform -translate-x-20 flex flex-wrap gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center mb-4 flex-col">
                                <Image src={skill.logo} alt={skill.name} width={100} height={100} />
                                <span className="ml-2">{skill.name}</span>
                            </div>
                        ))}
                    </div>
 
                </div>
            </div>
        </MainLayout>
    );
}