import type {Metadata} from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css'; // Global styles

const font = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'The My-Garage',
  description: 'Catalog your rides in style.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
