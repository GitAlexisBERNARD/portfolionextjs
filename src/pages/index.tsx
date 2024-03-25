import MainLayout from '@/layouts/MainLayout';
import AnimationImage from '@/components/AnimationImage';
import AnimationText from '@/components/AnimationText';
import Link from 'next/link';
const index: React.FC = () => {
  return (
    <MainLayout>
      <div className='h-[100vh] flex items-center justify-between'>
      <AnimationText />
      <AnimationImage />
      </div>
      <section className="px-4 flex flex-col gap-4">
      <Link href="/projects">
      <div className="w-full mx-auto md:p-4 p-10 linkhover">
      <div className="bg-[#E6E6E6] overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 md:h-[300px] h-[200px]" style={{ backgroundImage: "url('/images/dev_image.webp')", backgroundPosition: "center 0%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      </div>
      <div className='w-full mx-auto md:p-4 p-10 lg:p-14'>
        <div className="p-4 py-6 md:py-0 md:w-2/3 md:ml-[24px] my-auto mr-auto">
          <h1 className="text-3xl font-semibold mb-[16px] font-Syne">My projects</h1>
          <hr className="w-[80%] text-center border-black border-1" />
          <h2 className="text-base mt-[16px] font-Opensans md:mb-0 mb-[100px]">Got to my projects</h2>
          <button className="flex items-center mt-4"> Go to details <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"><path d="M16.9269 7.86438L10.7394 14.0519C10.6416 14.143 10.5123 14.1925 10.3788 14.1902C10.2452 14.1878 10.1177 14.1337 10.0233 14.0392C9.92879 13.9448 9.87467 13.8173 9.87232 13.6837C9.86996 13.5502 9.91954 13.4209 10.0106 13.3231L15.3173 8.01563H1.4375C1.30075 8.01563 1.1696 7.9613 1.0729 7.8646C0.9762 7.76791 0.921875 7.63675 0.921875 7.5C0.921875 7.36325 0.9762 7.2321 1.0729 7.1354C1.1696 7.0387 1.30075 6.98438 1.4375 6.98438H15.3173L10.0106 1.67688C9.91954 1.57913 9.86996 1.44985 9.87232 1.31627C9.87467 1.18268 9.92879 1.05523 10.0233 0.960761C10.1177 0.86629 10.2452 0.812175 10.3788 0.809818C10.5123 0.807462 10.6416 0.857046 10.7394 0.948126L16.9269 7.13563C17.0234 7.23231 17.0777 7.36336 17.0777 7.5C17.0777 7.63664 17.0234 7.7677 16.9269 7.86438Z" fill="#101010"></path></svg>
          </button>
        </div>
      </div>
      </div>
      </div>
     </Link>
     <div className="w-full mx-auto md:p-4 p-10 linkhover">
      <div className="bg-[#E6E6E6] overflow-hidden flex flex-col md:flex-row">
        <div className="p-4 py-6 md:py-0 md:w-2/3 md:ml-[24px] my-auto mr-auto order-2 md:order-1">
          <h1 className="text-3xl font-semibold mb-[16px] font-Syne">About Me</h1>
          <hr className="w-[80%] text-center border-black border-1" />
          <h2 className="text-base mt-[16px] font-Opensans md:mb-0 mb-[100px]">See more about me</h2>
          <button className="flex items-center mt-4"> Go to details <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"><path d="M16.9269 7.86438L10.7394 14.0519C10.6416 14.143 10.5123 14.1925 10.3788 14.1902C10.2452 14.1878 10.1177 14.1337 10.0233 14.0392C9.92879 13.9448 9.87467 13.8173 9.87232 13.6837C9.86996 13.5502 9.91954 13.4209 10.0106 13.3231L15.3173 8.01563H1.4375C1.30075 8.01563 1.1696 7.9613 1.0729 7.8646C0.9762 7.76791 0.921875 7.63675 0.921875 7.5C0.921875 7.36325 0.9762 7.2321 1.0729 7.1354C1.1696 7.0387 1.30075 6.98438 1.4375 6.98438H15.3173L10.0106 1.67688C9.91954 1.57913 9.86996 1.44985 9.87232 1.31627C9.87467 1.18268 9.92879 1.05523 10.0233 0.960761C10.1177 0.86629 10.2452 0.812175 10.3788 0.809818C10.5123 0.807462 10.6416 0.857046 10.7394 0.948126L16.9269 7.13563C17.0234 7.23231 17.0777 7.36336 17.0777 7.5C17.0777 7.63664 17.0234 7.7677 16.9269 7.86438Z" fill="#101010"></path></svg>
          </button>
          <div className="md:mt-4">
          </div>
          </div>
          <div className="md:w-1/3 md:h-[300px] h-[200px] md:order-2" style={{ backgroundImage: "url('/images/video_image.webp')", backgroundPosition: "center 0%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            </div>
          </div>
          </div>
          <div className="w-full mx-auto md:p-4 p-10 linkhover">
      <div className="bg-[#E6E6E6] overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 md:h-[300px] h-[200px]" style={{ backgroundImage: "url('/images/contactme.jpg')", backgroundPosition: "center 0%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      </div>
      <div className='w-full mx-auto md:p-4 p-10 lg:p-14'>
        <div className="p-4 py-6 md:py-0 md:w-2/3 md:ml-[24px] my-auto mr-auto">
          <h1 className="text-3xl font-semibold mb-[16px] font-Syne">Contact Me</h1>
          <hr className="w-[80%] text-center border-black border-1" />
          <h2 className="text-base mt-[16px] font-Opensans md:mb-0 mb-[100px]">Contact me for more info</h2>
          <button className="flex items-center mt-4"> Go to contact me page <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"><path d="M16.9269 7.86438L10.7394 14.0519C10.6416 14.143 10.5123 14.1925 10.3788 14.1902C10.2452 14.1878 10.1177 14.1337 10.0233 14.0392C9.92879 13.9448 9.87467 13.8173 9.87232 13.6837C9.86996 13.5502 9.91954 13.4209 10.0106 13.3231L15.3173 8.01563H1.4375C1.30075 8.01563 1.1696 7.9613 1.0729 7.8646C0.9762 7.76791 0.921875 7.63675 0.921875 7.5C0.921875 7.36325 0.9762 7.2321 1.0729 7.1354C1.1696 7.0387 1.30075 6.98438 1.4375 6.98438H15.3173L10.0106 1.67688C9.91954 1.57913 9.86996 1.44985 9.87232 1.31627C9.87467 1.18268 9.92879 1.05523 10.0233 0.960761C10.1177 0.86629 10.2452 0.812175 10.3788 0.809818C10.5123 0.807462 10.6416 0.857046 10.7394 0.948126L16.9269 7.13563C17.0234 7.23231 17.0777 7.36336 17.0777 7.5C17.0777 7.63664 17.0234 7.7677 16.9269 7.86438Z" fill="#101010"></path></svg>
          </button>
        </div>
      </div>
      </div>
      </div>
      </section>

    </MainLayout>
  );
};

export default index;
