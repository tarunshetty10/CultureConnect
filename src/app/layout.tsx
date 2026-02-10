import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'CultureConnect',
  description: 'Exploring and connecting cultural traditions and religions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <NavigationMenu />
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
