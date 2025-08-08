import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-heading'
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EcoGadget | Sustainable Smart Home',
  description: 'Shop eco-friendly tech for a greener future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.className}`}>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

