import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
const AnimationText = () => {
  const h3Ref = useRef(null);
  const h1Ref = useRef(null);
  const BtnRef = useRef(null);

  useEffect(() => {
    gsap.from([h3Ref.current, h1Ref.current,BtnRef.current], {
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.out", 
    });
  }, []);

  return (
    <div className='flex flex-col justify-center ml-[15vw]'>
      <h3 ref={h3Ref} className='font-ClashGroteskBold text-[60px]'>Hi I’m Alexis BERNARD</h3>
      <h1 ref={h1Ref} className='font-ClashGroteskBold uppercase  text-[25px]'>Future Backend developer</h1>
      <Link href="/projects" ref={BtnRef} className="relative inline-block px-4 py-2 font-medium group mt-12 w-1/4 linkhover">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-xl bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-xl"></span>
          <span className="relative text-black group-hover:text-white">See my work</span>
      </Link>
    </div>
  );
};

export default AnimationText;
