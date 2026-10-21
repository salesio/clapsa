import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ContentProvider } from '@/context/ContentContext';
import { QuoteProvider } from '@/context/QuoteContext';
import ClientShell from '@/components/ClientShell';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      className={`${plusJakartaSans.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className={`${plusJakartaSans.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans min-h-screen flex flex-col selection:bg-rose-500 selection:text-white transition-colors duration-200`}>
        <ThemeProvider>
          <LanguageProvider>
            <ContentProvider>
              <QuoteProvider>
                <ClientShell>
                  {children}
                </ClientShell>
              </QuoteProvider>
            </ContentProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
