import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                Time tracking for real crews
              </p>
              <h1 className="mt-5 max-w-4xl font-mono text-5xl leading-[1.05] text-[var(--foreground)] md:text-7xl">
                Log hours fast. Approve work faster. Keep every project visible.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                ContractorOS helps small teams track time, manage projects, review
                weekly timesheets, and see profitability without spreadsheet chaos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000"}
                  className="rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
                >
                  Start free
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-4 text-center text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
                >
                  Book demo
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="grid gap-4">
                <div className="rounded-3xl border border-[var(--line)] bg-[#fffaf0] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-soft)]">
                    This week
                  </p>
                  <p className="mt-4 text-4xl font-semibold text-[var(--foreground)]">
                    126h tracked
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    8 timesheets waiting for review, 14 active projects across 3 crews.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-[var(--line)] p-5">
                    <p className="text-sm text-[var(--muted)]">Approval cycle</p>
                    <p className="mt-3 text-3xl font-semibold">1.3 days</p>
                  </div>
                  <div className="rounded-3xl border border-[var(--line)] p-5">
                    <p className="text-sm text-[var(--muted)]">Billable utilization</p>
                    <p className="mt-3 text-3xl font-semibold">78%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-3">
            {[
              "Clock in or enter time manually in seconds.",
              "Review timesheets with clear approval states and notes.",
              "See project burn, utilization, and revenue pulse in one place.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5 text-sm leading-7 text-[var(--muted)]">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
