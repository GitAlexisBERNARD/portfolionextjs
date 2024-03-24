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

    </MainLayout>
  );
};

export default index;
