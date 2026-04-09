import { Mail } from "lucide-react";

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.92.43.37.813 1.096.813 2.21 0 1.595-.014 2.88-.014 3.27 0 .318.216.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Contact
      </h2>
      <div className="mt-6 max-w-2xl">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Let&apos;s build something measurable.
        </h3>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          I&apos;m open to full-time Marketing Analytics and Digital Strategy
          roles. The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:arokhith@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            <Mail className="w-4 h-4" /> arokhith@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/adhithyarokhith/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
          >
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/arokhith1998"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
      <footer className="mt-20 pt-8 border-t border-zinc-200 text-sm text-zinc-500 flex justify-between">
        <span>© {new Date().getFullYear()} Adhithya Rokhith Bhaskar</span>
        <span>Built with Next.js & Tailwind</span>
      </footer>
    </section>
  );
}
