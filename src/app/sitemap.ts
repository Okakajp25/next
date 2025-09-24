import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.metadata.url}`,
      lastModified: new Date(),
    },
  ]
}