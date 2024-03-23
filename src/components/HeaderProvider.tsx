import React from 'react';
import Header from '@/components/PageHaeder';
import { NextUIProvider } from '@nextui-org/react';
import '@/app/globals.css';
const HeaderProvider: React.FC = () => {
    return (
        <NextUIProvider>
            <Header />
        </NextUIProvider>
    );
};


export default HeaderProvider;
