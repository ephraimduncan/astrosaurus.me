import Link from './Link';
import siteMetadata, { github, twitter } from '@/data/siteMetadata';
import NewsletterForm from './NewsletterForm';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mb-8 mt-4">
      <FooterGradient />
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <div className="w-full pb-16 flex flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col sm:flex-row sm:space-x-16">
          <div className="flex flex-row mb-1 sm:mb-0 sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">About</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
            </Link>
            <Link href="/tags">
              <a className="text-gray-500 hover:text-gray-600 transition">Tags</a>
            </Link>
          </div>
          <div className="flex flex-row  mb-1 sm:mb-0  sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <ExternalLink href={twitter}>Twitter</ExternalLink>
            <ExternalLink href={github}>GitHub</ExternalLink>
            <Link href="/feed.xml">
              <a className="text-gray-500 hover:text-gray-600 transition">RSS</a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:items-center sm:justify-center  mb-5 ">
          <p className="text-gray-500 text-base self-start dark:text-gray-400 text-left sm:text-right mb-2">
            Understand, don't memorize.
          </p>
          {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
        </div>
      </div>
    </footer>
  );
}

function FooterGradient() {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-1]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 rounded-t-full opacity-20 blur-3xl h-[200px]" />
    </div>
  );
}
