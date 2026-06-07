import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree, logo } = education;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        {/* Image + text wrapper */}
        <div className="flex gap-4">
          {/* Left-side logo */}
          {logo && (
            <img
              src={logo}
              alt={`${school} logo`}
              className="h-12 w-12 rounded-md object-contain"
            />
          )}

          {/* Right side content aligned together */}
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3
                className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm"
                id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {school}
              </h3>
              <EducationPeriod start={start} end={end} />
            </div>

            <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
              {degree}
            </h4>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div
          className={cn(
            "mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty",
            logo && "ml-16"
          )}
        >
          {education.gpa && (
            <div className="text-sm text-muted-foreground">{education.gpa}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        Education
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item) => (
          <article key={`${item.school}-${item.start}`}>
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
