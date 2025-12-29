import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ProjectMetadata = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
};

export type Project = {
    slug: string;
    metadata: ProjectMetadata;
    content: string;
};

export function getProjects(): Project[] {
    const projectsDirectory = path.join(contentDirectory, "projects");

    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);

    const projects = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                metadata: data as ProjectMetadata,
                content,
            };
        });

    return projects.sort((a, b) => {
        if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
        }
        return 1;
    });
}

export function getProjectBySlug(slug: string): Project | null {
    const projectsDirectory = path.join(contentDirectory, "projects");
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        metadata: data as ProjectMetadata,
        content,
    };
}

export function getPosts(): Project[] {
    const postsDirectory = path.join(contentDirectory, "blog");

    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                metadata: data as ProjectMetadata,
                content,
            };
        });

    return posts.sort((a, b) => {
        if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
        }
        return 1;
    });
}

export function getPostBySlug(slug: string): Project | null {
    const postsDirectory = path.join(contentDirectory, "blog");
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        metadata: data as ProjectMetadata,
        content,
    };
}
