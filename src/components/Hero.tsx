"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium text-zinc-500 mb-4">
          Hi, I&apos;m Adhithya —
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          Marketing Analytics leader turning data into{" "}
          <span className="text-zinc-400">measurable growth.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 leading-relaxed">
          4+ years managing multi-million dollar digital advertising and SEO
          campaigns. I blend performance marketing, experimentation, and
          analytics to drive ROAS, cut CPA, and scale brands. Simon Business
          School — M.S. Marketing Analytics (STEM).
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            View Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#clients"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            <Download className="w-4 h-4" /> Brands I&apos;ve worked with
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
