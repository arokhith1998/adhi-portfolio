import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { formatDate, getAllPosts, SITE_URL } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing - Adhithya Rokhith Bhaskar",
  description:
    "Notes on pricing, growth and building with AI, from someone who does all three for a living.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
          Writing
        </h1>
        <p className="mt-3 text-zinc-400">
          Pricing, growth and building with AI. Mostly what I noticed this week.
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 text-zinc-500">First post is on its way.</p>
        ) : (
          <ul className="mt-14 divide-y divide-zinc-800 border-t border-zinc-800">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-8 transition-colors"
                >
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                    {post.draft && (
                      <span className="rounded border border-amber-500/40 px-1.5 text-xs text-amber-400">
                        draft
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 text-xl font-medium text-zinc-100 group-hover:text-white">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-zinc-400">{post.description}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
