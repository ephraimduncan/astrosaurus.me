import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="description" content="Software Developer in Ghana" />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:description" content="Software Developer in Ghana" />
      <meta property="og:title" content={title} />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3D2gTjPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUludGVyOjQwMCw1MDAmZGlzcGxheT1ibG9jaycKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgoKICA8RmxleAogICAgc3g9e3sKICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgZm9udFNpemU6IDQwLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgaGVpZ2h0OiAnMTAwJScsCiAgICAgIHBhZGRpbmc6ICc4MHB4IDgwcHgnLAogICAgICBwYWRkaW5nVG9wOiAnMzAwcHgnCiAgICB9fQogID4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PgogICAgICA8Qm94CiAgICAgICAgYXM9J2ltZycKICAgICAgICBzcmM9J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZXBocmFpaW0vYXN0cm9zYXVydXMubWUvbWFpbi9wdWJsaWMvc3RhdGljL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJwogICAgICAgIHN4PXt7CiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLAogICAgICAgICAgd2lkdGg6IDUwLAogICAgICAgICAgaGVpZ2h0OiA1MCwKICAgICAgICB9fQogICAgICAvPgogICAgICA8VGV4dCBzeD17eyBmb250V2VpZ2h0OiA1MDAgfX0-RXBocmFpbSBBdHRhLUR1bmNhbjwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CgogIDxzdmcKICAgIGlkPSd0ZXh0dXJlJwogICAgc3R5bGU9e3sKICAgICAgcG9zaXRpb246ICdmaXhlZCcsCiAgICAgIGluc2V0OiAwLAogICAgICB6SW5kZXg6ICckbWF4JywKICAgICAgd2lkdGg6ICcxMDAlJywKICAgICAgaGVpZ2h0OiAnMTAwdmgnLAogICAgICBvcGFjaXR5OiAnLjI1JywKICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLAogICAgICBmaWx0ZXI6ICdjb250cmFzdCgxMjAlKSBicmlnaHRuZXNzKDEyMCUpJywKICAgIH19CiAgPgogICAgPGZpbHRlciBpZD0nbm9pc2UnPgogICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgdHlwZT0nZnJhY3RhbE5vaXNlJwogICAgICAgIGJhc2VGcmVxdWVuY3k9Jy44JwogICAgICAgIG51bU9jdGF2ZXM9JzQnCiAgICAgICAgc3RpdGNoVGlsZXM9J3N0aXRjaCcKICAgICAgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIHZhbHVlcz0nMCcgLz4KICAgIDwvZmlsdGVyPgogICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgLz4KICA8L3N2Zz4KPC8-%23"
      />
      <meta
        itemProp="image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3D2gTjPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUludGVyOjQwMCw1MDAmZGlzcGxheT1ibG9jaycKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgoKICA8RmxleAogICAgc3g9e3sKICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgZm9udFNpemU6IDQwLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgaGVpZ2h0OiAnMTAwJScsCiAgICAgIHBhZGRpbmc6ICc4MHB4IDgwcHgnLAogICAgICBwYWRkaW5nVG9wOiAnMzAwcHgnCiAgICB9fQogID4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PgogICAgICA8Qm94CiAgICAgICAgYXM9J2ltZycKICAgICAgICBzcmM9J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZXBocmFpaW0vYXN0cm9zYXVydXMubWUvbWFpbi9wdWJsaWMvc3RhdGljL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJwogICAgICAgIHN4PXt7CiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLAogICAgICAgICAgd2lkdGg6IDUwLAogICAgICAgICAgaGVpZ2h0OiA1MCwKICAgICAgICB9fQogICAgICAvPgogICAgICA8VGV4dCBzeD17eyBmb250V2VpZ2h0OiA1MDAgfX0-RXBocmFpbSBBdHRhLUR1bmNhbjwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CgogIDxzdmcKICAgIGlkPSd0ZXh0dXJlJwogICAgc3R5bGU9e3sKICAgICAgcG9zaXRpb246ICdmaXhlZCcsCiAgICAgIGluc2V0OiAwLAogICAgICB6SW5kZXg6ICckbWF4JywKICAgICAgd2lkdGg6ICcxMDAlJywKICAgICAgaGVpZ2h0OiAnMTAwdmgnLAogICAgICBvcGFjaXR5OiAnLjI1JywKICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLAogICAgICBmaWx0ZXI6ICdjb250cmFzdCgxMjAlKSBicmlnaHRuZXNzKDEyMCUpJywKICAgIH19CiAgPgogICAgPGZpbHRlciBpZD0nbm9pc2UnPgogICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgdHlwZT0nZnJhY3RhbE5vaXNlJwogICAgICAgIGJhc2VGcmVxdWVuY3k9Jy44JwogICAgICAgIG51bU9jdGF2ZXM9JzQnCiAgICAgICAgc3RpdGNoVGlsZXM9J3N0aXRjaCcKICAgICAgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIHZhbHVlcz0nMCcgLz4KICAgIDwvZmlsdGVyPgogICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgLz4KICA8L3N2Zz4KPC8-%23"
      />
      <meta
        name="twitter:image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3D2gTjPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUludGVyOjQwMCw1MDAmZGlzcGxheT1ibG9jaycKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgoKICA8RmxleAogICAgc3g9e3sKICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgZm9udFNpemU6IDQwLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgaGVpZ2h0OiAnMTAwJScsCiAgICAgIHBhZGRpbmc6ICc4MHB4IDgwcHgnLAogICAgICBwYWRkaW5nVG9wOiAnMzAwcHgnCiAgICB9fQogID4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PgogICAgICA8Qm94CiAgICAgICAgYXM9J2ltZycKICAgICAgICBzcmM9J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZXBocmFpaW0vYXN0cm9zYXVydXMubWUvbWFpbi9wdWJsaWMvc3RhdGljL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJwogICAgICAgIHN4PXt7CiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLAogICAgICAgICAgd2lkdGg6IDUwLAogICAgICAgICAgaGVpZ2h0OiA1MCwKICAgICAgICB9fQogICAgICAvPgogICAgICA8VGV4dCBzeD17eyBmb250V2VpZ2h0OiA1MDAgfX0-RXBocmFpbSBBdHRhLUR1bmNhbjwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CgogIDxzdmcKICAgIGlkPSd0ZXh0dXJlJwogICAgc3R5bGU9e3sKICAgICAgcG9zaXRpb246ICdmaXhlZCcsCiAgICAgIGluc2V0OiAwLAogICAgICB6SW5kZXg6ICckbWF4JywKICAgICAgd2lkdGg6ICcxMDAlJywKICAgICAgaGVpZ2h0OiAnMTAwdmgnLAogICAgICBvcGFjaXR5OiAnLjI1JywKICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLAogICAgICBmaWx0ZXI6ICdjb250cmFzdCgxMjAlKSBicmlnaHRuZXNzKDEyMCUpJywKICAgIH19CiAgPgogICAgPGZpbHRlciBpZD0nbm9pc2UnPgogICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgdHlwZT0nZnJhY3RhbE5vaXNlJwogICAgICAgIGJhc2VGcmVxdWVuY3k9Jy44JwogICAgICAgIG51bU9jdGF2ZXM9JzQnCiAgICAgICAgc3RpdGNoVGlsZXM9J3N0aXRjaCcKICAgICAgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIHZhbHVlcz0nMCcgLz4KICAgIDwvZmlsdGVyPgogICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgLz4KICA8L3N2Zz4KPC8-%23"
      />
      <meta
        property="og:image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpedro%26p%3D2gTjPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUludGVyOjQwMCw1MDAmZGlzcGxheT1ibG9jaycKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgoKICA8RmxleAogICAgc3g9e3sKICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgZm9udFNpemU6IDQwLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgaGVpZ2h0OiAnMTAwJScsCiAgICAgIHBhZGRpbmc6ICc4MHB4IDgwcHgnLAogICAgICBwYWRkaW5nVG9wOiAnMzAwcHgnCiAgICB9fQogID4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PgogICAgICA8Qm94CiAgICAgICAgYXM9J2ltZycKICAgICAgICBzcmM9J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZXBocmFpaW0vYXN0cm9zYXVydXMubWUvbWFpbi9wdWJsaWMvc3RhdGljL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJwogICAgICAgIHN4PXt7CiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLAogICAgICAgICAgd2lkdGg6IDUwLAogICAgICAgICAgaGVpZ2h0OiA1MCwKICAgICAgICB9fQogICAgICAvPgogICAgICA8VGV4dCBzeD17eyBmb250V2VpZ2h0OiA1MDAgfX0-RXBocmFpbSBBdHRhLUR1bmNhbjwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CgogIDxzdmcKICAgIGlkPSd0ZXh0dXJlJwogICAgc3R5bGU9e3sKICAgICAgcG9zaXRpb246ICdmaXhlZCcsCiAgICAgIGluc2V0OiAwLAogICAgICB6SW5kZXg6ICckbWF4JywKICAgICAgd2lkdGg6ICcxMDAlJywKICAgICAgaGVpZ2h0OiAnMTAwdmgnLAogICAgICBvcGFjaXR5OiAnLjI1JywKICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLAogICAgICBmaWx0ZXI6ICdjb250cmFzdCgxMjAlKSBicmlnaHRuZXNzKDEyMCUpJywKICAgIH19CiAgPgogICAgPGZpbHRlciBpZD0nbm9pc2UnPgogICAgICA8ZmVUdXJidWxlbmNlCiAgICAgICAgdHlwZT0nZnJhY3RhbE5vaXNlJwogICAgICAgIGJhc2VGcmVxdWVuY3k9Jy44JwogICAgICAgIG51bU9jdGF2ZXM9JzQnCiAgICAgICAgc3RpdGNoVGlsZXM9J3N0aXRjaCcKICAgICAgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIHZhbHVlcz0nMCcgLz4KICAgIDwvZmlsdGVyPgogICAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgLz4KICA8L3N2Zz4KPC8-%23"
      />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const router = useRouter();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, images = [] }) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}${img}`,
    };
  });

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      };
    });
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  };

  const twImageUrl = featuredImages[0].url;

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
      />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
