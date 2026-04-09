"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Hi, I&apos;m Adhithya —
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl text-zinc-50">
            Product & Pricing{" "}
            <span className="text-zinc-500">strategist.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            4+ years across PPC, display, and Shopping campaigns, GTM and
            positioning for new products, and pricing strategy for B2B and D2C
            ecommerce brands. M.S. Marketing Analytics with a Pricing
            specialization — Simon Business School, University of Rochester.
            Based in Boston, MA.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:block"
        >
          <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Adhithya Rokhith Bhaskar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
