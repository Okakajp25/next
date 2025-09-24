import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '運営サーバー一覧',
  description: 'Okakajpが運営・管理に携わっているサーバーの一覧ページです。',
  openGraph: {
    title: '運営サーバー一覧 - ' + siteConfig.metadata.name,
    description: 'Okakajpが運営・管理に携わっているサーバーの一覧ページです。',
    siteName: siteConfig.metadata.name,
    locale: 'ja-JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '運営サーバー一覧 - ' + siteConfig.metadata.name,
    description: 'Okakajpが運営・管理に携わっているサーバーの一覧ページです。',
    site: '@okakajp25',
    creator: '@nonick_mc',
  }
};

export default function ServersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}