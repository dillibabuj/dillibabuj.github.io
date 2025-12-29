"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function Header() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    Portfolio
                </Link>
                <nav className="flex items-center gap-6">
                    <ul className="hidden items-center gap-6 sm:flex">
                        {siteConfig.navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`relative text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${pathname === item.path
                                        ? "text-neutral-900 dark:text-neutral-100"
                                        : "text-neutral-500 dark:text-neutral-400"
                                        }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>
                </nav>
            </div>
        </header>
    );
}
