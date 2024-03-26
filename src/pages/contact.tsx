import MainLayout from '@/layouts/MainLayout';
import ContactForm from '@/components/ContactForm';

const contact: React.FC = () => {
  return (
    <MainLayout>
      <div className='h-[70vh] flex flex-col'>
      <h1 className='font-ClashGroteskSemiBold text-center text-2xl'>Contact Me</h1>
        <ContactForm/>
      </div>
    </MainLayout>
  );
};

export default contact;
