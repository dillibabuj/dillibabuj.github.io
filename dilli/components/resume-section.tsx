import { ReactNode } from "react";

interface ResumeSectionProps {
    title: string;
    children: ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
    return (
        <section className="flex w-full flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <div className="flex flex-col gap-8">{children}</div>
        </section>
    );
}
