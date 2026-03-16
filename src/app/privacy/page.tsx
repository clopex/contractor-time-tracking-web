import { SiteShell } from "@/components/site-shell";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
          <h1 className="font-mono text-4xl leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            This placeholder policy exists so the standalone web repo already has a legal route.
            Replace this copy with your final privacy terms before launch.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
