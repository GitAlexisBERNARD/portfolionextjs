import React from 'react';
import Header from '@/components/PageHaeder';
import { NextUIProvider } from '@nextui-org/react';
import '@/app/globals.css';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NextUIProvider>
      <Header />
      <main>{children}</main>
      <footer>
        Page du footer
      </footer>
    </NextUIProvider>
  );
};

export default MainLayout;
