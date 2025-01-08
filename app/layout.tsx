
import React, { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';
import ScrollUp from '@/components/ScrollUp/ScrollUp';
import './globals.css'
import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton';

interface LayoutProps {
  children: ReactNode;
}


export const metadata = {
  title: 'Avrupa Göz Estetik',
  description: 'Avrupa göz estetik hakkında bilgi alın',

  icons: {
    icon: '/logo.png',
  },

};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='hidden lg:flex justify-center items-center h-screen'>
          <p>Sitemiz sadece Mobil ve Tablet cihazlarda görüntülenebilmektedir. Daha iyi bir deneyim için lütfen Tablet veya mobilden giriş yapın</p>
        </div>
        <div className='block lg:hidden'>

          <main>{children}</main>
          <Footer />
          <ScrollUp />
        </div>
      </body>
    </html>
  );
};

export default Layout;
