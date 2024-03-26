import type { Post } from '@prisma/client'; 
import Link from 'next/link';

export default function UnPost({ title, content, id }: Post) {
  const contentObject = typeof content === 'string' ? JSON.parse(content) : content;
  console.log(contentObject.imagepost);
  return (
    <div>
      <div className='lg:block hidden'>
      <Link href={`/projects/${id}`}>
      <div>
        <section className="p-5 aspect-square">
          <div className="relative">
            <div className="absolute w-full card-dashed"></div>
            <section className="flex w-full lg:aspect-square max-[400px]:h-[700px] min-[1480px]:h-auto lg:h-[600px] card-main">
              <div className="justify-end p-10 items-start w-full h-full flex flex-col gap-5 content-a">
                <img src={contentObject.imagepost} className="w-20" />
                <h3 className="text-3xl font-ClashGroteskRegular text-white">
                  {title}
                </h3>
              </div>
              <div className="hidden p-10 max-w-[100%] card-hovered-content">
                <h2 className="mb-5 font-bold text-3xl text-white">{title}</h2>
                <p className="mb-10 font-IntelOneLight text-[14px] text-white">{contentObject.technoPost}</p>
                <p className=" text-white font-IntelOneLight">{contentObject.introPost}</p>
                <div className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group w-[150px]">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">See my work</span>
                  <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      </Link>
      </div>
      <div className='block lg:hidden'>
      <div>
        <section className="p-5 aspect-square">
          <div className="relative">
            <div className="absolute w-full card-dashed"></div>
            <section className="flex w-full lg:aspect-square max-[400px]:h-[700px] aspect-square min-[1480px]:h-auto lg:h-[600px] card-main">
              <div className="justify-end p-10 items-start w-full h-full flex flex-col gap-5 content-a">
                <img src={contentObject.imagepost} className="w-20" />
                <h3 className="text-3xl font-ClashGroteskRegular text-white">
                  {title}
                </h3>
              </div>
              <div className="hidden p-10 max-w-[100%] card-hovered-content"> 
                <h2 className="mb-5 font-bold text-3xl text-white font-IntelOneLight">{title}</h2>
                <p className="mb-10 text-white font-IntelOneLight text-[14px]">{contentObject.technoPost}</p>
                <p className="text-white font-IntelOneLight font-bold">{contentObject.introPost}</p>
                <Link href={`/projects/${id}`}>
                <div className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group w-[150px]">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">See my work</span>
                  <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </div>
                </Link>
              </div>
             
            </section>
          </div>
        </section>
      </div>
      
      </div>
      <style jsx>{`
        .card-main {
          border: solid 2px #fff;
          background-color: ##0F0F0F;
          z-index: 10;
          position: relative;
          transition: all .3s ease-in-out;
        }
        
        .card-main:hover {
          transform: translate(-30px, -30px);
          border: solid 2px gray;
        }
        
        .card-main:hover .content-a, .card-main:hover img, .card-main:hover h3 {
          display: none;
        }
        
        
        .card-dashed {
          position: absolute;
          width: 100%;
          border: dashed 2px #fff;
          height: 100%;
          z-index: -10;
        }
        
        .card-hovered-content {
          display: none; /* Masqué par défaut */
          flex-direction: column;
          gap: 1rem;
        }
        
        .card-main:hover .card-hovered-content {
          display: flex; /* Affiche le contenu au survol */
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}
