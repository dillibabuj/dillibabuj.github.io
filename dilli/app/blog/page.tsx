import Link from "next/link";
import { getPosts } from "@/lib/mdx";

export const metadata = {
    title: "Blog",
    description: "Thoughts and ideas.",
};

export default function BlogPage() {
    const posts = getPosts();

    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Blog
                    </h1>
                    <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
                        Thoughts, ideas, and tutorials on web development.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col gap-2"
                        >
                            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                                {post.metadata.title}
                            </h2>
                            <time className="text-sm text-neutral-500 dark:text-neutral-400">
                                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {post.metadata.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
