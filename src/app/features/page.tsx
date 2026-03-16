import { SiteShell } from "@/components/site-shell";

const features = [
  {
    title: "Fast time capture",
    body: "Start and stop timers, add manual entries, and keep weekly timesheets clean without slowing crews down.",
  },
  {
    title: "Project visibility",
    body: "Track hours by client, project, and task so owners know where budget and margin are moving.",
  },
  {
    title: "Approval workflow",
    body: "Managers review submitted hours quickly, reject with notes, and keep a clear audit trail.",
  },
  {
    title: "AI assistant",
    body: "Draft time entries, summarize weekly work, and suggest missing hours before users submit.",
  },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
          Features
        </p>
        <h1 className="mt-4 font-mono text-5xl leading-tight md:text-6xl">
          Built for contractor workflows, not generic office timesheets.
        </h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
