export const teamInfo = {
  name: "G1FT3D",
  tagline: "> ./exploit --target=ctf --mode=all",
  description:
    "G1FT3Dは「異能で異能をつくりあげる」を掲げた学生のためのコミュニティです。\n" +
    "CTF・競プロ・数学など幅広いジャンルに対応し、技術の研鑽と知識の共有を目的として活動しています。",
  founded: "2024",
  twitterUrl: "https://twitter.com/g1ft3d_ctf",  // TODO: 実際のURLに変更
};

export const categories = [
  { name: "Web", icon: "🌐", description: "Web脆弱性・SQLi・XSS・SSRF等" },
  { name: "Pwn", icon: "💥", description: "バッファオーバーフロー・ROP等" },
  { name: "Crypto", icon: "🔐", description: "暗号解読・RSA・楕円曲線等" },
  { name: "Rev", icon: "⚙️", description: "リバースエンジニアリング・解析" },
  { name: "Misc", icon: "🔍", description: "雑多な問題・総合系" },
  { name: "Forensics", icon: "🧪", description: "ログ・メモリ・ファイル解析" },
  { name: "OSINT", icon: "🕵️", description: "公開情報からの情報収集・追跡" },
  { name: "Blockchain", icon: "⛓️", description: "スマートコントラクト・DeFi脆弱性" },
  { name: "Jail", icon: "🔒", description: "サンドボックス脱出・制限環境突破" },
  { name: "Boot2Root", icon: "🖥️", description: "マシン侵入・権限昇格・完全掌握" },
  { name: "PPC", icon: "🧮", description: "競技プログラミング・最適化問題" },
  { name: "Quantum", icon: "⚛️", description: "量子アルゴリズム・量子暗号" },
  { name: "Stego", icon: "🖼️", description: "画像・音声への情報隠蔽・検出" },
  { name: "Hardware", icon: "🔧", description: "回路解析・ファームウェア・IoT" },
  { name: "Mobile", icon: "📱", description: "Android/iOS アプリ解析" },
  { name: "AI/ML", icon: "🤖", description: "AIモデル攻撃・敵対的サンプル等" },
];

export const stats = [
  { label: "CTF参加回数", value: 4, suffix: "回" },
  { label: "最高チーム順位", value: 100, suffix: "位" },
  { label: "チームメンバー", value: 50, suffix: "人" },
];

export const history = [
  { year: "2025-04", event: "G1FT3D 結成" },
  { year: "2025-06", event: "Diver OSINT CTF 参加(2666Point/100th)" },
  { year: "2025-07", event: "SECCON Beginners CTF 2025参加(1772Point/214th)" },
  { year: "2025-12", event: "コミックマーケット107 出典" },
  { year: "2026-01", event: "Swimmer OSINT CTF 参加(3514Point/111th)" },
  { year: "2026-03", event: "Pico CTF 2026参加(???Point/???th)" },
];
