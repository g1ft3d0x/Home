export type CTFResult = {
  name: string;
  date: string;
  rank: string;
  tags: string[];
};

export const recentResults: CTFResult[] = [
  {
    name: "picoCTF 2026",
    date: "2026-03",
    rank: "???",
    tags: ["Web", "Pwn", "Crypto", "Rev", "Misc", "Forensics", "BlockChain"],
  },
  {
    name: "SWIMMER OSINT CTF 2026",
    date: "2026-01",
    rank: "111th",
    tags: ["OSINT"],
  },
  {
    name: "SECCON Beginners CTF 2025",
    date: "2025-07",
    rank: "214th",
    tags: ["Web", "Pwn", "Crypto", "Rev", "Misc"],
  },
  {
    name: "DIVER OSINT CTF 2025",
    date: "2025-06",
    rank: "100th",
    tags: ["OSINT"],
  },

];
