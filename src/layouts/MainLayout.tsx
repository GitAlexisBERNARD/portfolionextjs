import React from 'react';
import Header from '@/components/PageHaeder';
import Footer from '@/components/PageFooter';
import Head from 'next/head';
//@ts-ignore
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { NextUIProvider } from '@nextui-org/react';
import '@/app/globals.css';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <NextUIProvider>
            <div>
    <CustomCursor
      targets={['.linkhover']}
      customClass='custom-cursor'
      dimensions={60}
      fill='#000'
      smoothness={{
        movement: 0.3,
        scale: 0.3,
        opacity: 0.4,
      }}
      targetOpacity={0.5}
    />
  </div>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"  />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
          </Head>
        <Header />
        <main className='overflow-hidden'>{children}</main>
        <Footer />
      </NextUIProvider>
    );
};

export default MainLayout;
