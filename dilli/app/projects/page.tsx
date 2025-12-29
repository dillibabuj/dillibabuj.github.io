import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/mdx";

export const metadata = {
    title: "Projects",
    description: "A selection of my recent work.",
};

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Projects
                    </h1>
                    <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
                        A selection of projects that showcase my passion for building
                        high-quality web applications.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                        {project.metadata.title}
                                    </h2>
                                    <time className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {new Date(project.metadata.date).getFullYear()}
                                    </time>
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-neutral-500" />
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {project.metadata.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.metadata.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
