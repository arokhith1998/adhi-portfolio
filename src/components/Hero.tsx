"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-20 sm:pt-28 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative inline-block">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Adhithya Rokhith Bhaskar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-1 right-1 flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-[10px] font-semibold px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
        </div>

        <p className="mt-6 text-sm font-medium text-zinc-500">
          Hi, I&apos;m Adhithya —
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl text-zinc-50">
          Marketing leader,{" "}
          <span className="text-zinc-500">
            Product & Pricing strategist.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          4+ years leading digital marketing, product marketing, and pricing
          strategy across B2B and D2C ecommerce brands — from $1.4M paid media
          budgets and 16x ROAS rebuilds to GTM, positioning, and price
          architecture for new product lines. M.S. Marketing Analytics with a
          Pricing specialization — Simon Business School, University of
          Rochester. Based in Boston, MA.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
          >
            View Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#clients"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
          >
            <Briefcase className="w-4 h-4" /> Brands I&apos;ve worked with
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
