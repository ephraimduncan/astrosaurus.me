import React from 'react';
import GiscusComponent from '@giscus/react';
import { useTheme } from 'next-themes';

import siteMetadata from '@/data/siteMetadata';

const Giscus = () => {
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
        ? siteMetadata.comment.giscusConfig.darkTheme
        : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL;

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
      <GiscusComponent
        id="comments"
        repo={repo}
        repoId={repositoryId}
        category={category}
        categoryId={categoryId}
        mapping={mapping}
        reactionsEnabled={reactions}
        emitMetadata={metadata}
        inputPosition={inputPosition}
        theme={commentsTheme}
        lang={lang}
        loading="lazy"
      />
    </div>
  );
};

export default Giscus;
