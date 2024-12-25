
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  charset: 'utf-8',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Avrupa Göz Estetik',
    description: 'Avrupa göz estetik hakkında bilgi alın',
    url: 'https://www.avrupagozestetikinfo.com',
    images: '/logo.svg',
  },
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>

          <main>{children}</main>
          <Footer />
          <ScrollUp />
          <AskQuestionButton />
        </div>
      </body>
    </html>
  );
};

export default Layout;
