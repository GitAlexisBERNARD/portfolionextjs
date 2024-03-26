import MainLayout from '@/layouts/MainLayout';
import Form from '@/components/AddProjects';

const Ajoutprojet: React.FC = () => {
  return (
    <MainLayout>
      <div className='flex items-center justify-center'>
      <h1 className='font-ClashGroteskRegular text-white items-center text-2xl'>Ajout projet</h1>
      </div>
      <Form />
    </MainLayout>
  );
};

export default Ajoutprojet;
