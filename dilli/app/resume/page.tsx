import { Download } from "lucide-react";
import type { Metadata } from "next";
import { ResumeSection } from "@/components/resume-section";
import { ResumeItem } from "@/components/resume-item";

export const metadata: Metadata = {
    title: "Resume",
    description: "My professional experience and skills.",
};

export default function ResumePage() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8">
            <main className="flex w-full max-w-3xl flex-col items-start gap-12">
                <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            Dilli Babu Resume
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            Software Engineer with 10+ years of experience in web development and
                            testing.
                        </p>
                    </div>
                </div>

                <ResumeSection title="Experience">
                    <ResumeItem
                        title="Lead Software Engineer"
                        subtitle="London Stock Exchange Group"
                        date="Sep 2022 - Present"
                        description="Developing UI, Stored Procedures and REST APIs for the application targeted at central banks"
                    />
                    <ResumeItem
                        title="Senior Software Engineer"
                        subtitle="Oracle"
                        date="May 2021 - Aug 2022"
                        description="Building Quality Dashboard for management which includes building UI using React and REST APIs using JAX RS / Spring Boot & Hibernate"
                    />
                    <ResumeItem
                        title="SDET"
                        subtitle="MTAP Technologies"
                        date="Aug 2019 - Apr 2021"
                        description="Providing support to the React, ReactNative App Developers & DB Admin. Overseeing manual & automation testing efforts for the core products of the company."
                    />
                    <ResumeItem
                        title="System Engineer/Analyst"
                        subtitle="Infosys Ltd."
                        date="May 2014 - Aug 2019"
                        description="Tools/Technologies : React, Java, Selenium, HP’s Application Lifecycle Management (ALM), SOAP UI"
                    />
                </ResumeSection>

                <ResumeSection title="Education">
                    <ResumeItem
                        title="B.Tech Major in ECE , Minor in CSE"
                        subtitle="University of Technology"
                        date="2010 — 2014"
                    />
                </ResumeSection>

                <ResumeSection title="Certifications">
                    <ResumeItem
                        title="Microsoft Certified: Azure Fundamentals"
                        subtitle="Microsoft"
                        date="Issued Oct 2025"
                    />
                    <ResumeItem
                        title="Oracle Cloud Infrastructure Developer Associate"
                        subtitle="Oracle"
                        date="Issued May 2022"
                    />
                    <ResumeItem
                        title="Oracle Cloud Infrastructure Architect Associate"
                        subtitle="Oracle"
                        date="Issued Apr 2022"
                    />
                    <ResumeItem
                        title="Oracle Certified Associate, Java SE 8 Programmer"
                        subtitle="Oracle"
                        date=""
                    />
                </ResumeSection>

                <section className="flex w-full flex-col gap-8">
                    <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Node.js",
                            "Java",
                            "PostgreSQL",
                            "SQL",
                            "Docker",
                            "Kubernetes",
                            "Azure",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
