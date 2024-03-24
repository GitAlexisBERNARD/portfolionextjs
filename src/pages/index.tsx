import MainLayout from '@/layouts/MainLayout';
import AnimationImage from '@/components/AnimationImage';
import AnimationText from '@/components/AnimationText';

const index: React.FC = () => {
  return (
    <MainLayout>
      <div className='h-[100vh] flex items-center justify-between'>
      <AnimationText />
      <AnimationImage />
      </div>
      <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-xl bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-xl"></span>
        <span className="relative text-black group-hover:text-white">Button Text</span>
      </a>
    </MainLayout>
  );
};

export default index;
