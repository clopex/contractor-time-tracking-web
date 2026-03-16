import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
            Contact
          </p>
          <h1 className="mt-4 font-mono text-5xl leading-tight md:text-6xl">
            Book a demo or ask for early access.
          </h1>
          <form className="mt-10 grid gap-4">
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4 outline-none transition focus:border-[var(--accent)]"
              placeholder="Name"
            />
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4 outline-none transition focus:border-[var(--accent)]"
              placeholder="Company email"
            />
            <textarea
              className="min-h-40 rounded-2xl border border-[var(--line)] bg-white px-4 py-4 outline-none transition focus:border-[var(--accent)]"
              placeholder="Tell us about your team, projects, and current time tracking process."
            />
            <button
              type="submit"
              className="w-fit rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
            >
              Request demo
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
