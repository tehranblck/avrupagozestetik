import Header from '@/components/Header/Header';
import React, { ReactNode } from 'react';
import { fetchCategories } from '@/components/fetchCategories';
import { getLocale } from 'next-intl/server';
import HeaderBottom from '@/components/Header/HeaderBottom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
    // const locale = await getLocale();
    // const categories = await fetchCategories(locale);

    return (
        <div >
            <div style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }} className='bg-white fixed top-0 right-0 w-full'>
                <Header />
                {/* <HeaderBottom categories={categories} /> */}
            </div>

            <main >{children}</main>


        </div>
    );
};

export default Layout;
