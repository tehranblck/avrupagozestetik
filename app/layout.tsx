
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
        <div>

          <main>{children}</main>
          <Footer />
          <ScrollUp />
        </div>
      </body>
    </html>
  );
};

export default Layout;
