import { Metadata, Viewport } from 'next';
import './globals.css';

import Provider from './provider';
import { Noto_Sans_JP } from 'next/font/google';
import { siteConfig } from '@/config/site';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.name,
    template: `%s - ${siteConfig.metadata.name}`,
  },
  description: siteConfig.metadata.description,
  metadataBase: new URL(siteConfig.metadata.url),
  openGraph: {
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.name,
    locale: 'ja-JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
    site: '@okakajp25',
    creator: '@nonick_mc',
  }
}

export const viewport: Viewport = {
  themeColor: '#007af8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={notoSansJp.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
