import { NextSeo } from 'next-seo';

export const MainSEO = () => {
  return (
    <>
      <NextSeo
        title="Ephraim Atta-Duncan"
        description="Software Developer and Software Engineer in Ghanna"
        openGraph={{
          type: 'website',
          url: 'https://astrosaurus.me',
          title: 'Ephraim Atta-Duncan',
          description: 'Software Engineer in Ghana',
          images: [{ url: 'https://astrosaurus.me/api/og' }],
          siteName: 'Ephraim Atta-Duncan',
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
              url: `https://astrosaurus.me/api/og?title=${title}`,
              alt: title,
            },
          ],
        }}
      />
    </>
  );
};
