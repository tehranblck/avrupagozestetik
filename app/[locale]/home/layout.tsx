'use client'; // Eğer gerekirse bu direktifi ekleyin
import Header from '@/components/Header/Header';
import React, { ReactNode } from 'react';
import HeaderBottom from '@/components/Header/HeaderBottom';
import Footer from '@/components/Footer/Footer';
import ScrollUp from '@/components/ScrollUp/ScrollUp';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div

                style={{
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    zIndex: 99,
                }}
                className="w-full bg-[#3a7ca0] fixed top-0 right-0"
            >
                <div id="upScroll"></div>
                <Header />
                <HeaderBottom />
            </div>

            <main>{children}</main>
            <Footer />
            <ScrollUp />
        </div>
    );
};

export default Layout;
