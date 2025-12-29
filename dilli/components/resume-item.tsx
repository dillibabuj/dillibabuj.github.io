import { ReactNode } from "react";

interface ResumeItemProps {
    title: string;
    subtitle: string;
    description?: ReactNode;
    date: string;
}

export function ResumeItem({ title, subtitle, description, date }: ResumeItemProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {date}
                </span>
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                {subtitle}
            </div>
            {/* Render children/description directly if it's text, otherwise render nodes */}
            {description && (
                <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {description}
                </div>
            )}
        </div>
    );
}
