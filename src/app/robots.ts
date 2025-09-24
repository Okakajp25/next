import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.metadata.url}/sitemap.xml`
  }
}