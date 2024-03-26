import MainLayout from '@/layouts/MainLayout';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const AnimationImage = () => {
  const containerRef = useRef(null);

  // Animation diagonale
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { x: 200, y: 200 }, 
        { x: 0, y: 0, duration: 2 } 
      );
    }
  }, []);

  useEffect(() => {
    const moveImage = (e: MouseEvent) => { 
        const { offsetX, offsetY } = e;
        gsap.to(containerRef.current, {
            x: offsetX * 0.05, 
            y: offsetY * 0.05,
            ease: 'power1.out',
            duration: 0.5,
        });
    }

    const container = containerRef.current as HTMLElement | null;
    if (container) {
        container.addEventListener('mousemove', moveImage);
    }

    return () => {
        if (container) {
            container.removeEventListener('mousemove', moveImage);
        }
    };
  }, []);

  return (
      <div 
        ref={containerRef} 
        className="lg:flex justify-end lg:col-start-6 lg:col-span-5">
            <Image
              src="/images/alexis.jpg"
              alt="Alexis Bernard"
              width={500}
              height={300}
              className="rounded-lg lg:col-start-6 lg:col-span-5 lg:w-4/5"
            />
      </div>
  );
};


export default AnimationImage;
