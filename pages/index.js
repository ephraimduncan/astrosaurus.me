import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import NewsletterForm from '@/components/NewsletterForm';
import BlogPostCard from '@/components/BlogPostCard';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title + ' - Developer, Writer'}
        description={siteMetadata.description}
      />
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-4 space-y-2 md:space-y-5">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight  text-black dark:text-white">
            Featured Posts
          </h3>
        </div>

        <div className="mb-6">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
            const { slug, title, date } = frontMatter;

            return (
              <BlogPostCard key={slug} date={date} index={index + 1} title={title} slug={slug} />
            );
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 mb-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="blog posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
