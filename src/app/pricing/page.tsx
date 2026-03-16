import { SiteShell } from "@/components/site-shell";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For a solo contractor validating the workflow.",
    bullets: ["1 user", "Basic time tracking", "Manual entry + timer", "Limited reports"],
  },
  {
    name: "Crew",
    price: "$29",
    description: "For small teams that need approvals and visibility.",
    bullets: ["Up to 5 users", "Approvals", "Project reports", "AI draft mode"],
  },
  {
    name: "Growth",
    price: "$79",
    description: "For teams managing multiple active jobs and margins.",
    bullets: ["Up to 20 users", "Advanced reporting", "Priority support", "Billing controls"],
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
          Pricing
        </p>
        <h1 className="mt-4 font-mono text-5xl leading-tight md:text-6xl">
          Simple pricing for small teams.
        </h1>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                {plan.name}
              </p>
              <p className="mt-4 text-5xl font-semibold">{plan.price}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--foreground)]">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
