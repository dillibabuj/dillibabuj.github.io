import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                </h1>
                <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                </p>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">Email</h2>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                        >
                            {siteConfig.email}
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">Socials</h2>
                        <div className="flex gap-6 text-neutral-500 dark:text-neutral-400">
                            <a
                                href={siteConfig.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                            >
                                <div className="flex items-center gap-2">
                                    <Github className="h-5 w-5" />
                                    <span>GitHub</span>
                                </div>
                            </a>
                            <a
                                href={siteConfig.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                            >
                                <div className="flex items-center gap-2">
                                    <Linkedin className="h-5 w-5" />
                                    <span>LinkedIn</span>
                                </div>
                            </a>
                            <a
                                href={siteConfig.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                            >
                                <div className="flex items-center gap-2">
                                    <Twitter className="h-5 w-5" />
                                    <span>Twitter</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
