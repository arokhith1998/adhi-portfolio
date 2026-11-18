import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { formatDate, getAllPosts, getPost, SITE_URL } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} - Adhithya Rokhith Bhaskar`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Adhithya Rokhith Bhaskar"],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← All writing
        </Link>

        <header className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        <article
          className="prose prose-invert prose-zinc mt-12 max-w-none prose-headings:tracking-tight prose-a:text-zinc-100 prose-a:underline-offset-4 prose-blockquote:border-zinc-700 prose-blockquote:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="mt-16 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
          Written by Adhithya Rokhith Bhaskar. I work on pricing and growth and
          build with AI.{" "}
          <a
            href="https://www.linkedin.com/in/adhithyarokhith/"
            className="text-zinc-100 underline underline-offset-4"
          >
            Say hi on LinkedIn
          </a>
          .
        </footer>
      </main>
    </>
  );
}
