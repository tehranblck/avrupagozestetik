import Header from '@/components/Header/Header';
import React, { ReactNode } from 'react';
import HeaderBottom from '@/components/Header/HeaderBottom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {


    return (
        <div >
            <div style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }} className=' w-full fixed top-0 right-0 '>
                <Header />
                <HeaderBottom />
            </div>

            <main >{children}</main>


        </div>
    );
};

export default Layout;
