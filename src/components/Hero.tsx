"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

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
          Digital Marketing, Product Marketing &{" "}
          <span className="text-zinc-400">Pricing strategist.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 leading-relaxed">
          4+ years across PPC, display, and Shopping campaigns, GTM and
          positioning for new products, and pricing strategy for B2B and D2C
          ecommerce brands. M.S. Marketing Analytics with a Pricing
          specialization — Simon Business School, University of Rochester.
          Based in Boston, MA.
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
            <Briefcase className="w-4 h-4" /> Brands I&apos;ve worked with
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
