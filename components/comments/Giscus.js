import React from 'react';
import { useTheme } from 'next-themes';

import siteMetadata from '@/data/siteMetadata';
import Script from 'next/script';

const Giscus = () => {
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
        ? siteMetadata.comment.giscusConfig.darkTheme
        : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL;

  const COMMENTS_ID = 'comments-container';

  const {
    repo,
    repositoryId,
    category,
    categoryId,
    mapping,
    reactions,
    metadata,
    inputPosition,
    lang,
  } = siteMetadata?.comment?.giscusConfig;

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div className="giscus" id={COMMENTS_ID}>
        <Script
          src="https://giscus.app/client.js"
          data-repo={repo}
          data-repo-id={repositoryId}
          data-category={category}
          data-category-id={categoryId}
          data-mapping={mapping}
          data-strict="0"
          data-reactions-enabled={reactions}
          data-emit-metadata={metadata}
          data-input-position={inputPosition}
          data-theme={commentsTheme}
          data-lang={lang}
          data-loading="lazy"
          crossorigin="anonymous"
          async
          onLoad={() => {
            console.log(siteMetadata?.comment?.giscusConfig);
          }}
        />
      </div>
    </div>
  );
};

export default Giscus;
