import { getPosts, getPostBySlug } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return;
    }

    return {
        title: post.metadata.title,
        description: post.metadata.description,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-8">
                <Link
                    href="/blog"
                    className="group flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>
                <div className="flex w-full flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {post.metadata.title}
                    </h1>
                    <time className="text-sm text-neutral-500 dark:text-neutral-400">
                        {new Date(post.metadata.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </div>
                <article className="prose prose-neutral w-full max-w-none dark:prose-invert">
                    <MDXRemote source={post.content} />
                </article>
            </main>
        </div>
    );
}
