import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import CustomCursor from '../components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Backend Developer Portfolio',
  description: 'Portfolio showcasing backend development skills and projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}