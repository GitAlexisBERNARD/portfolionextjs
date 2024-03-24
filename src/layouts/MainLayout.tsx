import React from 'react';
import Header from '@/components/PageHaeder';
import Footer from '@/components/PageFooter';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import '@/app/globals.css';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <NextUIProvider>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"  />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
          </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextUIProvider>
    );
};

export default MainLayout;
