import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimationText = () => {
  const h3Ref = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.from([h3Ref.current, h1Ref.current], {
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.out", 
    });
  }, []);

  return (
    <div className='flex flex-col justify-center ml-[15vw]'>
      <h3 ref={h3Ref} className='font-ClashGroteskBold text-[60px]'>Hi I’m Alexis Bernard</h3>
      <h1 ref={h1Ref} className='font-ClashGroteskBold uppercase  text-[25px]'>Future Backend developer</h1>
    </div>
  );
};

export default AnimationText;
