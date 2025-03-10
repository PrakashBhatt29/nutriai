import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutri AI',
  description: 'AI-powered nutrition planning app',
  icons: {
    icon:"/leafarc.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Toaster /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

