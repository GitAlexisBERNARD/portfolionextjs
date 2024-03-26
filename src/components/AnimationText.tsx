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
      <div className="flex flex-col lg:col-span-5 lg:flex justify-center">
        <h1 ref={h1Ref} className="capitalize font-ClashGroteskExtraLight text-5xl lg:text-9xl">
        Alexis Bernard
        </h1>
      <h2 ref={h3Ref} className="uppercase text-m lg:text-xl font-IntelOneLight">FUTURE BACKEND DEVELOPER</h2>
    </div>
  );
};

export default AnimationText;
