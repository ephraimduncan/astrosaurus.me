import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';
import Script from 'next/script';

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dapple-accessibility%26logo%3Dhttps%253A%252F%252Fastrosaurus.me%252Fstatic%252Ffavicons%252Fapple-touch-icon.png%26title1%3DEphraim%26title2%3DAtta-Duncan%26tooltip%3DDeveloper%26p%3DDwPgUABBwGIDYFMAekoQM5ILwG8erQgCMBDAYwGsBzAJwHsBXAOwBMAuCARwYRoE8AdESoAaAmjJ04dGh269Bk6TTGEoAMzpMALjBIBbAJZw%252BbcYQDkAWhIAHW4ivo%252B6bQn0iIAITiGmFAFlyAGUXN30YLW1PAEEaQxI4T3QSJnQnXkN1C1U1RMMqJgBJcPQOCzIEHV4c8wgAKwZXLL4AYSiq7XLK6ppawgBfAdRwQmAAFWRtOsxcfDU0TR1gwwAvBA4ANgAWXIWl7QB1BAKACy6ITYAGK721XyYEAAkTqnOOAEY7wn0kDgAmOpDcSjNQ4eT8ATaQzaRAfYZjAD0kyQ2nAYHEwC8dBQC1meDqUFsdHQMMMWnKNAQcBI0IAbgh%252BgsIBY2GwiAhNFTWRB5syiSSyRSWSQiOgpAw3Ez%252BZJqjpygAiBXS5mIdQXawfWxIFULbR0WzlKwADm1urUAHdDCxtKdPrtCWhTq93hAPg7%252BVAiDIWLwAEokFiGJocADs3zUpEotEYrDkPEhpzOvje0UdUG0NFS6C5%252BnKmezNLcAA0ABRWACsVwApABKCyOgYRqCstgkdU1Dh8-nE0nQ4UWUXiuCSxnNiQdeUspXmwjxVNG7Zm8deujafV5llWf4V5fpiBWm12t0ez3Os4Xd0r4g%252B-2B4NlCDh-dR6j0ZjsLgJwRJt4p87XgWaS5vmWZpEWCBllWdYNvyCJqMChCgmMKLTPy%252BLdsyBwrOsWynvyBzHBeWw3NeDzPC6l7Xr8bBfPurbtm4fRdvuAp9uSTDlEOEpSteUCym4U4WDOfEQPqhpbv8e6emgaoatu0kyRA86utYmyKTJ3rrnQm6alJOqia%252BMYfu0ygcMSvjoM6LACDQVCkKWrFoBCP7JheolQFcAgfBWTm1oZt40AAMpyFwAAYAMzahgUjWhAAAk4LfgIv6nP%252B2gDGFAU0L6NB%252BsRECRdFw5xYlLkpW5qaZfu8ELIhajIWC5XQrCCD-LVaDAMiUzogsExTI6GH7r2QqcSKYo8WO%252B7iRwVg7GRoXlNBs5oEBOYyLpa0QWWVgfP8Nb1teRnvnGX4KAISgyNel2yGdkLCNe2qfJsj2mG6tz7thawbG6xpHYFAZBiG73XgxHbMbyTkjf2Y2DhNI68U5AmdIqyqiXJS01ithBaRuHAfUpB7Wra%252BOieeC4QATSnejlvDBNofCIOUJUsNjaA07lhzE8eFjutFfNIJTJ4aZ6HO8KZMgcGFZXJTdAxiWB6C2CQVI6Ar2bK6r2jq2kmudFlTlrSBLJbbSkHltBtY6%252BgEEAJqlh8NwwTVjYdVAjWEEl536lI0K2G70DdaivVqP1qKDdgBIydDHFcfDo5szNEBzfhqqLSyy2AYrxsWKbJYO07h0vuQb6xp%252B5U3ddUiS3dggPcNfxui9w1vY715fbhv3-bTeX3sDbf0WyjGdpDhMxwO3EI1NhPI0JIlORjGdYwF2mblTMmHiTlNk5RpNOWLND04zP0WCzbOrj3XNHuUAvC4LAvnzePcS7d0te5CcvW3ratrd-2u-yrfWokjYbVAoWM2O1LbWztgXA6sFPQBygPVJCjp36CB9nAP27U6hdVQiHKAXVsRIFBF1eAyBwBdRAEAA%26tooltip2%3DWriter%23"
      />
      <meta
        itemProp="image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dapple-accessibility%26logo%3Dhttps%253A%252F%252Fastrosaurus.me%252Fstatic%252Ffavicons%252Fapple-touch-icon.png%26title1%3DEphraim%26title2%3DAtta-Duncan%26tooltip%3DDeveloper%26p%3DDwPgUABBwGIDYFMAekoQM5ILwG8erQgCMBDAYwGsBzAJwHsBXAOwBMAuCARwYRoE8AdESoAaAmjJ04dGh269Bk6TTGEoAMzpMALjBIBbAJZw%252BbcYQDkAWhIAHW4ivo%252B6bQn0iIAITiGmFAFlyAGUXN30YLW1PAEEaQxI4T3QSJnQnXkN1C1U1RMMqJgBJcPQOCzIEHV4c8wgAKwZXLL4AYSiq7XLK6ppawgBfAdRwQmAAFWRtOsxcfDU0TR1gwwAvBA4ANgAWXIWl7QB1BAKACy6ITYAGK721XyYEAAkTqnOOAEY7wn0kDgAmOpDcSjNQ4eT8ATaQzaRAfYZjAD0kyQ2nAYHEwC8dBQC1meDqUFsdHQMMMWnKNAQcBI0IAbgh%252BgsIBY2GwiAhNFTWRB5syiSSyRSWSQiOgpAw3Ez%252BZJqjpygAiBXS5mIdQXawfWxIFULbR0WzlKwADm1urUAHdDCxtKdPrtCWhTq93hAPg7%252BVAiDIWLwAEokFiGJocADs3zUpEotEYrDkPEhpzOvje0UdUG0NFS6C5%252BnKmezNLcAA0ABRWACsVwApABKCyOgYRqCstgkdU1Dh8-nE0nQ4UWUXiuCSxnNiQdeUspXmwjxVNG7Zm8deujafV5llWf4V5fpiBWm12t0ez3Os4Xd0r4g%252B-2B4NlCDh-dR6j0ZjsLgJwRJt4p87XgWaS5vmWZpEWCBllWdYNvyCJqMChCgmMKLTPy%252BLdsyBwrOsWynvyBzHBeWw3NeDzPC6l7Xr8bBfPurbtm4fRdvuAp9uSTDlEOEpSteUCym4U4WDOfEQPqhpbv8e6emgaoatu0kyRA86utYmyKTJ3rrnQm6alJOqia%252BMYfu0ygcMSvjoM6LACDQVCkKWrFoBCP7JheolQFcAgfBWTm1oZt40AAMpyFwAAYAMzahgUjWhAAAk4LfgIv6nP%252B2gDGFAU0L6NB%252BsRECRdFw5xYlLkpW5qaZfu8ELIhajIWC5XQrCCD-LVaDAMiUzogsExTI6GH7r2QqcSKYo8WO%252B7iRwVg7GRoXlNBs5oEBOYyLpa0QWWVgfP8Nb1teRnvnGX4KAISgyNel2yGdkLCNe2qfJsj2mG6tz7thawbG6xpHYFAZBiG73XgxHbMbyTkjf2Y2DhNI68U5AmdIqyqiXJS01ithBaRuHAfUpB7Wra%252BOieeC4QATSnejlvDBNofCIOUJUsNjaA07lhzE8eFjutFfNIJTJ4aZ6HO8KZMgcGFZXJTdAxiWB6C2CQVI6Ar2bK6r2jq2kmudFlTlrSBLJbbSkHltBtY6%252BgEEAJqlh8NwwTVjYdVAjWEEl536lI0K2G70DdaivVqP1qKDdgBIydDHFcfDo5szNEBzfhqqLSyy2AYrxsWKbJYO07h0vuQb6xp%252B5U3ddUiS3dggPcNfxui9w1vY715fbhv3-bTeX3sDbf0WyjGdpDhMxwO3EI1NhPI0JIlORjGdYwF2mblTMmHiTlNk5RpNOWLND04zP0WCzbOrj3XNHuUAvC4LAvnzePcS7d0te5CcvW3ratrd-2u-yrfWokjYbVAoWM2O1LbWztgXA6sFPQBygPVJCjp36CB9nAP27U6hdVQiHKAXVsRIFBF1eAyBwBdRAEAA%26tooltip2%3DWriter%23"
      />
      <meta
        name="twitter:image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dapple-accessibility%26logo%3Dhttps%253A%252F%252Fastrosaurus.me%252Fstatic%252Ffavicons%252Fapple-touch-icon.png%26title1%3DEphraim%26title2%3DAtta-Duncan%26tooltip%3DDeveloper%26p%3DDwPgUABBwGIDYFMAekoQM5ILwG8erQgCMBDAYwGsBzAJwHsBXAOwBMAuCARwYRoE8AdESoAaAmjJ04dGh269Bk6TTGEoAMzpMALjBIBbAJZw%252BbcYQDkAWhIAHW4ivo%252B6bQn0iIAITiGmFAFlyAGUXN30YLW1PAEEaQxI4T3QSJnQnXkN1C1U1RMMqJgBJcPQOCzIEHV4c8wgAKwZXLL4AYSiq7XLK6ppawgBfAdRwQmAAFWRtOsxcfDU0TR1gwwAvBA4ANgAWXIWl7QB1BAKACy6ITYAGK721XyYEAAkTqnOOAEY7wn0kDgAmOpDcSjNQ4eT8ATaQzaRAfYZjAD0kyQ2nAYHEwC8dBQC1meDqUFsdHQMMMWnKNAQcBI0IAbgh%252BgsIBY2GwiAhNFTWRB5syiSSyRSWSQiOgpAw3Ez%252BZJqjpygAiBXS5mIdQXawfWxIFULbR0WzlKwADm1urUAHdDCxtKdPrtCWhTq93hAPg7%252BVAiDIWLwAEokFiGJocADs3zUpEotEYrDkPEhpzOvje0UdUG0NFS6C5%252BnKmezNLcAA0ABRWACsVwApABKCyOgYRqCstgkdU1Dh8-nE0nQ4UWUXiuCSxnNiQdeUspXmwjxVNG7Zm8deujafV5llWf4V5fpiBWm12t0ez3Os4Xd0r4g%252B-2B4NlCDh-dR6j0ZjsLgJwRJt4p87XgWaS5vmWZpEWCBllWdYNvyCJqMChCgmMKLTPy%252BLdsyBwrOsWynvyBzHBeWw3NeDzPC6l7Xr8bBfPurbtm4fRdvuAp9uSTDlEOEpSteUCym4U4WDOfEQPqhpbv8e6emgaoatu0kyRA86utYmyKTJ3rrnQm6alJOqia%252BMYfu0ygcMSvjoM6LACDQVCkKWrFoBCP7JheolQFcAgfBWTm1oZt40AAMpyFwAAYAMzahgUjWhAAAk4LfgIv6nP%252B2gDGFAU0L6NB%252BsRECRdFw5xYlLkpW5qaZfu8ELIhajIWC5XQrCCD-LVaDAMiUzogsExTI6GH7r2QqcSKYo8WO%252B7iRwVg7GRoXlNBs5oEBOYyLpa0QWWVgfP8Nb1teRnvnGX4KAISgyNel2yGdkLCNe2qfJsj2mG6tz7thawbG6xpHYFAZBiG73XgxHbMbyTkjf2Y2DhNI68U5AmdIqyqiXJS01ithBaRuHAfUpB7Wra%252BOieeC4QATSnejlvDBNofCIOUJUsNjaA07lhzE8eFjutFfNIJTJ4aZ6HO8KZMgcGFZXJTdAxiWB6C2CQVI6Ar2bK6r2jq2kmudFlTlrSBLJbbSkHltBtY6%252BgEEAJqlh8NwwTVjYdVAjWEEl536lI0K2G70DdaivVqP1qKDdgBIydDHFcfDo5szNEBzfhqqLSyy2AYrxsWKbJYO07h0vuQb6xp%252B5U3ddUiS3dggPcNfxui9w1vY715fbhv3-bTeX3sDbf0WyjGdpDhMxwO3EI1NhPI0JIlORjGdYwF2mblTMmHiTlNk5RpNOWLND04zP0WCzbOrj3XNHuUAvC4LAvnzePcS7d0te5CcvW3ratrd-2u-yrfWokjYbVAoWM2O1LbWztgXA6sFPQBygPVJCjp36CB9nAP27U6hdVQiHKAXVsRIFBF1eAyBwBdRAEAA%26tooltip2%3DWriter%23"
      />
      <meta
        property="og:image"
        content="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dapple-accessibility%26logo%3Dhttps%253A%252F%252Fastrosaurus.me%252Fstatic%252Ffavicons%252Fapple-touch-icon.png%26title1%3DEphraim%26title2%3DAtta-Duncan%26tooltip%3DDeveloper%26p%3DDwPgUABBwGIDYFMAekoQM5ILwG8erQgCMBDAYwGsBzAJwHsBXAOwBMAuCARwYRoE8AdESoAaAmjJ04dGh269Bk6TTGEoAMzpMALjBIBbAJZw%252BbcYQDkAWhIAHW4ivo%252B6bQn0iIAITiGmFAFlyAGUXN30YLW1PAEEaQxI4T3QSJnQnXkN1C1U1RMMqJgBJcPQOCzIEHV4c8wgAKwZXLL4AYSiq7XLK6ppawgBfAdRwQmAAFWRtOsxcfDU0TR1gwwAvBA4ANgAWXIWl7QB1BAKACy6ITYAGK721XyYEAAkTqnOOAEY7wn0kDgAmOpDcSjNQ4eT8ATaQzaRAfYZjAD0kyQ2nAYHEwC8dBQC1meDqUFsdHQMMMWnKNAQcBI0IAbgh%252BgsIBY2GwiAhNFTWRB5syiSSyRSWSQiOgpAw3Ez%252BZJqjpygAiBXS5mIdQXawfWxIFULbR0WzlKwADm1urUAHdDCxtKdPrtCWhTq93hAPg7%252BVAiDIWLwAEokFiGJocADs3zUpEotEYrDkPEhpzOvje0UdUG0NFS6C5%252BnKmezNLcAA0ABRWACsVwApABKCyOgYRqCstgkdU1Dh8-nE0nQ4UWUXiuCSxnNiQdeUspXmwjxVNG7Zm8deujafV5llWf4V5fpiBWm12t0ez3Os4Xd0r4g%252B-2B4NlCDh-dR6j0ZjsLgJwRJt4p87XgWaS5vmWZpEWCBllWdYNvyCJqMChCgmMKLTPy%252BLdsyBwrOsWynvyBzHBeWw3NeDzPC6l7Xr8bBfPurbtm4fRdvuAp9uSTDlEOEpSteUCym4U4WDOfEQPqhpbv8e6emgaoatu0kyRA86utYmyKTJ3rrnQm6alJOqia%252BMYfu0ygcMSvjoM6LACDQVCkKWrFoBCP7JheolQFcAgfBWTm1oZt40AAMpyFwAAYAMzahgUjWhAAAk4LfgIv6nP%252B2gDGFAU0L6NB%252BsRECRdFw5xYlLkpW5qaZfu8ELIhajIWC5XQrCCD-LVaDAMiUzogsExTI6GH7r2QqcSKYo8WO%252B7iRwVg7GRoXlNBs5oEBOYyLpa0QWWVgfP8Nb1teRnvnGX4KAISgyNel2yGdkLCNe2qfJsj2mG6tz7thawbG6xpHYFAZBiG73XgxHbMbyTkjf2Y2DhNI68U5AmdIqyqiXJS01ithBaRuHAfUpB7Wra%252BOieeC4QATSnejlvDBNofCIOUJUsNjaA07lhzE8eFjutFfNIJTJ4aZ6HO8KZMgcGFZXJTdAxiWB6C2CQVI6Ar2bK6r2jq2kmudFlTlrSBLJbbSkHltBtY6%252BgEEAJqlh8NwwTVjYdVAjWEEl536lI0K2G70DdaivVqP1qKDdgBIydDHFcfDo5szNEBzfhqqLSyy2AYrxsWKbJYO07h0vuQb6xp%252B5U3ddUiS3dggPcNfxui9w1vY715fbhv3-bTeX3sDbf0WyjGdpDhMxwO3EI1NhPI0JIlORjGdYwF2mblTMmHiTlNk5RpNOWLND04zP0WCzbOrj3XNHuUAvC4LAvnzePcS7d0te5CcvW3ratrd-2u-yrfWokjYbVAoWM2O1LbWztgXA6sFPQBygPVJCjp36CB9nAP27U6hdVQiHKAXVsRIFBF1eAyBwBdRAEAA%26tooltip2%3DWriter%23"
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
      <Script
        id="seo-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />

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
      </Head>
    </>
  );
};
