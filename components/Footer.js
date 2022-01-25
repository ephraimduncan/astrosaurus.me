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
    <footer className="flex flex-col justify-center items-start mx-auto w-full my-8">
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <div className="w-full pb-16 flex flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col sm:flex-row sm:space-x-16">
          <div className="flex flex-row mb-1 sm:mb-0 sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">About</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
            </Link>
          </div>
          <div className="flex flex-row  mb-1 sm:mb-0  sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <ExternalLink href={twitter}>Twitter</ExternalLink>
            <ExternalLink href={github}>GitHub</ExternalLink>
          </div>
        </div>

        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex sm:items-center sm:justify-center sm:pt-4 mb-5 ">
            <NewsletterForm />
          </div>
        )}
      </div>
    </footer>
  );
}
