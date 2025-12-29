import { getProjects, getProjectBySlug } from "@/lib/mdx";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
    const projects = getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return;
    }

    return {
        title: project.metadata.title,
        description: project.metadata.description,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-8">
                <Link
                    href="/projects"
                    className="group flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </Link>
                <div className="flex w-full flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            {project.metadata.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                            <time>{new Date(project.metadata.date).getFullYear()}</time>
                            <span>•</span>
                            <div className="flex gap-2">
                                {project.metadata.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        {project.metadata.description}
                    </p>
                    <div className="flex gap-4 pt-2">
                        {project.metadata.link && (
                            <a
                                href={project.metadata.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                        {project.metadata.github && (
                            <a
                                href={project.metadata.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                            >
                                <Github className="h-4 w-4" />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
                <article className="prose prose-neutral w-full max-w-none dark:prose-invert">
                    <MDXRemote source={project.content} />
                </article>
            </main>
        </div>
    );
}
