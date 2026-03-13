import { recentResults } from "@/data/ctf-results";
import Link from "next/link";

const tagColors: Record<string, string> = {
  Web: "border-blue-500/60 text-blue-400",
  Pwn: "border-red-500/60 text-red-400",
  Crypto: "border-yellow-500/60 text-yellow-400",
  Rev: "border-purple-500/60 text-purple-400",
  Misc: "border-green-500/60 text-green-400",
  Forensics: "border-cyan-500/60 text-cyan-400",
  OSINT: "border-orange-500/60 text-orange-400",
  Blockchain: "border-emerald-500/60 text-emerald-400",
  Jail: "border-pink-500/60 text-pink-400",
  Boot2Root: "border-rose-500/60 text-rose-400",
  PPC: "border-lime-500/60 text-lime-400",
};

export function RecentSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-code text-xs text-text-muted mb-2 tracking-widest">
              # RECENT ACTIVITY
            </p>
            <h2 className="font-mono-display text-2xl md:text-3xl text-text-primary">
              直近の参加実績
            </h2>
          </div>
          <Link
            href="/about"
            className="font-mono-display text-xs text-text-muted hover:text-primary transition-colors tracking-widest hidden md:block"
          >
            View All →
          </Link>
        </div>

        <div className="space-y-3">
          {recentResults.map((result, i) => (
            <div
              key={i}
              className="group border border-border bg-surface rounded-lg px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-primary/50 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="font-code text-xs text-text-muted w-16 shrink-0">
                  {result.date}
                </span>
                <span className="font-mono-display text-sm text-text-primary group-hover:text-primary transition-colors">
                  {result.name}
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {result.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-code text-xs border rounded px-2 py-0.5 ${tagColors[tag] ?? "border-border text-text-muted"}`}
                  >
                    {tag}
                  </span>
                ))}
                <span className="font-mono-display text-sm text-primary ml-2 shrink-0">
                  {result.rank}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
