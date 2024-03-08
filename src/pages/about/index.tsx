import MainLayout from '@/layouts/MainLayout';
import DatView from '@/components/DataView';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <h1>Page About</h1>
      <DatView message="Hello World" />
    </MainLayout>
  );
};

export default AboutPage;
