import { FaXTwitter, FaEnvelope } from "react-icons/fa6";

const contacts = [
  {
    label: "X (Twitter)",
    description: "DM でお気軽にどうぞ",
    href: "https://twitter.com/G1FT3D",
    Icon: FaXTwitter,
    handle: "@G1FT3D",
  },
  {
    label: "Email",
    description: "メールでのお問い合わせ",
    href: "mailto:g1ft3d.ctf@outlook.jp",
    Icon: FaEnvelope,
    handle: "g1ft3d.ctf@outlook.jp",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-xl mx-auto space-y-12">

        {/* ヘッダー */}
        <div>
          <p className="font-code text-xs text-text-muted mb-3 tracking-widest"># CONTACT</p>
          <h1 className="font-mono-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            コンタクト
          </h1>
          <p className="text-text-muted text-sm leading-relaxed">
            CTF のコラボレーション・質問・その他お問い合わせは<br />
            X (Twitter) の DM またはメールにてご連絡ください。
          </p>
        </div>

        {/* 連絡先リスト */}
        <div className="space-y-3">
          {contacts.map(({ label, description, href, Icon, handle }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-5 border border-border bg-surface rounded-lg px-6 py-5 hover:border-primary transition-all duration-200"
            >
              <Icon className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors shrink-0" />
              <div>
                <div className="font-mono-display text-sm text-text-primary group-hover:text-primary transition-colors">
                  {label}
                </div>
                <div className="font-code text-xs text-text-muted mt-0.5">{description}</div>
                <div className="font-code text-xs text-primary mt-1">{handle}</div>
              </div>
              <span className="ml-auto text-text-muted group-hover:text-primary transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
