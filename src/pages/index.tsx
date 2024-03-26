import MainLayout from '@/layouts/MainLayout';
import AnimationImage from '@/components/AnimationImage';
import AnimationText from '@/components/AnimationText';
import Link from 'next/link';
const index: React.FC = () => {
  return (
    <MainLayout>
      <div className="h-full flex flex-col m-6 py-12 gap-32 lg:grid grid-cols-12 lg:gap-4 lg:m-auto lg:gap-y-36">
      <div className="col-start-2 col-span-10 flex flex-col lg:grid grid-cols-10 gap-4 lg:p-20">
      <AnimationText />
      <AnimationImage />
      </div>
      </div>
    </MainLayout>
  );
};

export default index;
