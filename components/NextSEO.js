import React from 'react';
import { NextSeo } from 'next-seo';

export const MainSEO = () => {
  const [hostname, setHostname] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <>
      <NextSeo
        title="Ephraim Atta-Duncan"
        description="A Software Developer in Ghanna"
        openGraph={{
          type: 'website',
          url: hostname,
          title: 'Ephraim Atta-Duncan',
          description: 'A Software Engineer in Ghana',
          images: [{ url: `${hostname}/api/og` }],
          siteName: 'Ephraim Atta-Duncan Personal Portfolio',
        }}
        twitter={{
          handle: '@EphraimDuncan_',
          site: '@EphraimDuncan_',
          cardType: 'summary_large_image',
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
    </>
  );
};

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, tags }) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();

  const [hostname, setHostname] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <>
      <NextSeo
        openGraph={{
          title: title,
          description: summary,
          url: url,
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            section: title,

            authors: ['Ephraim Atta-Duncan', 'https://astrosaurus.me/'],
            tags: tags,
          },
          images: [
            {
              url: `${hostname}/api/og?title=${title}`,
              alt: title,
            },
          ],
        }}
      />
    </>
  );
};
