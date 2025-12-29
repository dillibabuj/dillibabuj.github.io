import { siteConfig } from "@/lib/config";

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="container mx-auto px-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                <div className="mt-4 flex justify-center gap-4">
                    <a
                        href={siteConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        Twitter
                    </a>
                    <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
