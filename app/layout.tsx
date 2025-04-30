import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useThemeStore } from '@/store/useThemeStore';

export const metadata = {
  title: 'SkillSync',
  description: 'Career growth platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore.getState(); 

  return (
    <html lang="en" className={theme}>
      <head>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
