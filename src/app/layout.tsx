import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ContentProvider } from '@/context/ContentContext';
import { QuoteProvider } from '@/context/QuoteContext';
import ClientShell from '@/components/ClientShell';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://salesio.github.io/clapsa';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'CLAPSA Procurement | One Source Supply Solutions & Portfolio Showcase',
  description: 'Premier South African procurement partner for corporate uniforms, high-density embroidery, certified SABS industrial PPE, branded gazebos/displays, and VIP corporate gifting across SADC.',
  keywords: [
    'CLAPSA Procurement',
    'Corporate Uniforms South Africa',
    'Industrial PPE Johannesburg',
    'SABS Conti Suits',
    'Custom Branded Gazebos',
    'Caterpillar Safety Boots',
    'Amrod Barron Trade Supplier',
    'Corporate Gifting South Africa',
    'SADC Procurement Logistics'
  ],
  icons: {
    icon: '/clapsa/images/logo-badge.png',
  },
  openGraph: {
    title: 'CLAPSA Procurement | One Source Supply Solutions',
    description: 'Corporate apparel, certified industrial PPE, outdoor displays, and VIP corporate gifts for leading enterprises in South Africa and SADC.',
    url: SITE_URL,
    siteName: 'CLAPSA Procurement',
    images: [
      {
        url: `${SITE_URL}/images/media/Unknown1.jpg`,
        width: 1200,
        height: 630,
        alt: 'CLAPSA Procurement — Corporate Supply Solutions',
      },
    ],
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLAPSA Procurement | One Source Supply Solutions',
    description: 'Corporate apparel, certified industrial PPE, outdoor displays, and VIP corporate gifts for leading enterprises in South Africa and SADC.',
    images: [`${SITE_URL}/images/media/Unknown1.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans min-h-screen flex flex-col selection:bg-rose-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <ContentProvider>
            <QuoteProvider>
              <ClientShell>
                {children}
              </ClientShell>
            </QuoteProvider>
          </ContentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
