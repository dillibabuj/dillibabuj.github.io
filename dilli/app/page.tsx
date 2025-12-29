"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 sm:px-8">
      <main className="flex w-full max-w-3xl flex-col items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:to-neutral-500">
              {siteConfig.name}
            </span>
            .
          </h1>
          <p className="max-w-xl text-lg text-neutral-600 sm:text-xl md:text-2xl dark:text-neutral-400">
            A software engineer focused on building accessible, human-centered
            products. I craft high-performance web applications with a focus on
            minimalism and usability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6 text-neutral-500 dark:text-neutral-400"
        >
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </main>
    </div>
  );
}
