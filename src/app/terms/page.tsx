import { SiteShell } from "@/components/site-shell";

export default function TermsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
          <h1 className="font-mono text-4xl leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            This placeholder terms page is ready for production legal copy later. The route exists now
            so pricing and signup flows have valid footer links from day one.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
