'use client';
import Header from '@/components/Header/Header';
import React, { ReactNode } from 'react';
import HeaderBottom from '@/components/Header/HeaderBottom';
import Footer from '@/components/Footer/Footer';
import ScrollUp from '@/components/ScrollUp/ScrollUp';
import './globals.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <div

            style={{
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              zIndex: 99,
            }}
            className="w-full fixed top-0 right-0"
          >
            <div id="upScroll"></div>
            <Header />
            <HeaderBottom />
          </div>

          <main>{children}</main>
          <Footer />
          <ScrollUp />
        </div>
      </body>
    </html>
  );
};

export default Layout;
