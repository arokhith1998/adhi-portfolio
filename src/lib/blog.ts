import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export const SITE_URL = "https://adhithyabhaskar.vercel.app";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingMinutes: number;
  draft: boolean;
};

export type Post = PostMeta & { html: string };

const showDrafts = process.env.NODE_ENV !== "production";

function readPostFile(file: string): { meta: PostMeta; body: string } {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingMinutes: Math.max(1, Math.round(words / 230)),
      draft: data.draft === true,
    },
    body: content,
  };
}

function postFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map((f) => readPostFile(f).meta)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = `${slug}.md`;
  if (!postFiles().includes(file)) return null;
  const { meta, body } = readPostFile(file);
  if (meta.draft && !showDrafts) return null;
  const html = await marked.parse(body);
  return { ...meta, html };
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
