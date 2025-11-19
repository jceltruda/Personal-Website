import React from "react";
import type { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
        {summary}
      </div>
      <p className="text-pretty font-mono text-sm text-foreground/80 mt-4">
        <a 
          href="/resume" 
          className="underline hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </p>
    </Section>
  );
}
