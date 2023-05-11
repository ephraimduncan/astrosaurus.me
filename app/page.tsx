import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="dark:text-grey-100 text-grey-800 mt-10 space-y-5">
        <p>
          Hi there, I&apos;m a developer, writer, and a hacker who&apos;s
          passionate about building products for the web. I&apos;m particularly
          interested in open source development and actively contribute to
          various projects like Documenso.
        </p>
        <p>
          In my spare time, I enjoy sharing my learnings and experiences with
          fellow developers through my blog. I&apos;m always looking for
          opportunities to learn new technologies and improve my skills.
        </p>
        <p>
          I&apos;m a detail-oriented engineer with a passion for frontend
          architecture, React, TypeScript, and metaframeworks. I specialize in
          building and maintaining public-facing websites and web applications
          with Next.js.
        </p>
      </div>
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
