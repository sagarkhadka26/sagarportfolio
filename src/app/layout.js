import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Sagar Kumar Khadka — UI/UX Designer',
  description:
    'Portfolio of Sagar Kumar Khadka, a UI/UX Designer crafting meaningful digital experiences with clean, minimal design.',
  keywords: ['UI/UX Designer', 'Portfolio', 'Sagar Kumar Khadka', 'Web Design', 'Figma'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <Loader />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
