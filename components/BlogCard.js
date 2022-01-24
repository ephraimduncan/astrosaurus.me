import formatDate from '@/lib/utils/formatDate'
import Link from 'next/link'

export default function BlogCard({ title, summary, date, slug }) {
  return (
    <li key={slug} className="py-4">
      <article className=" xl:items-baseline">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold leading-8 tracking-tight">
            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
              {title}
            </Link>
          </h3>

          <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
        </div>
        <div className="prose text-gray-500 max-w-none dark:text-gray-400">{summary}</div>
      </article>
    </li>
  )
}
