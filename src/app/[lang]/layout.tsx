import { Locale, i18n } from '@/i18n.config';
import { getHtmlDirection } from '@/utils/getHtmlDirection';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/[lang]/_components/myProviders';
import GlobalStyles from '../../styles/globalStyles';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js 13 & i18n Template',
  description: 'Template for Next.js 13 with App Router and i18n',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      dir={getHtmlDirection(params.lang)}>
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
