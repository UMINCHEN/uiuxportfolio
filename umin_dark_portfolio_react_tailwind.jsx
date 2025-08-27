import React, { useMemo, useState } from "react";

// ----- Data (edit me) -----
const PROJECTS = [
  {
    id: "vms-app",
    title: "VMS App – 租賃制影像管理",
    role: "UI/UX Design • Design System",
    year: "2024–2025",
    tags: ["VMS", "Mobile", "IoT"],
    thumb:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    summary:
      "行動端影像觀看、排程、回放、帳號與系統設定，含多品牌 IPC 快速新增流程。",
  },
  {
    id: "nvr",
    title: "NVR – 錄影主機設定與監控",
    role: "Product Design • UX Flow",
    year: "2024",
    tags: ["NVR", "Security", "Desktop"],
    thumb:
      "https://images.unsplash.com/photo-1527443224154-c4f2a1b2b981?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    summary:
      "多站點集中管理、通道設定與健康檢查，簡化安裝維護。",
  },
  {
    id: "cloud",
    title: "Cloud – VMS 生態系骨幹",
    role: "UX • IA • Copy",
    year: "2025",
    tags: ["Cloud", "Web", "Platform"],
    thumb:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    summary:
      "串聯 NVR 與 VMS，提供授權、租賃管理與基本監控入口。",
  },
];

export default function PortfolioApp() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PROJECTS;
    return PROJECTS.filter((p) =>
      [p.title, p.role, p.year, p.summary, p.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-dvh bg-black text-white selection:bg-white/20">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-white text-black px-3 py-2 rounded"
      >
        跳到主要內容
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/70">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="flex items-center gap-6 py-4">
            <div className="font-semibold tracking-wide">UMIN · Portfolio</div>
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <a className="navlink" href="#about" aria-label="關於 UMIN">
                關於
              </a>
              <a className="navlink" href="#works" aria-label="作品">
                作品
              </a>
              <a className="navlink" href="#resume" aria-label="下載履歷">
                履歷
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            UI/UX Designer 專注 AIoT 與安控生態系
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            打造 VMS · NVR · Cloud · App 的一致體驗與設計系統，讓複雜的安防情境變得清晰可用。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#works" className="btn-primary" aria-label="瀏覽作品">
              查看作品
            </a>
            <a href="#resume" className="btn-ghost" aria-label="下載履歷">
              下載履歷
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        {/* About */}
        <section id="about" className="section">
          <div className="section-inner">
            <h2 className="section-title">關於 UMIN</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              你好，我是 <span className="font-semibold">UMIN CHEN</span>，一位來自新北的
              UI/UX 設計師，擅長規劃 <span className="underline decoration-white/30 underline-offset-4">VMS 生態系</span>
              與跨裝置體驗，包含行動 App、NVR 桌面端與雲端。關注設計系統、資訊架構、
              可維護性與可觀測性，使用 Figma、React、Tailwind 等工具。
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/70">
              <li className="info-pill">5+ 年產品設計</li>
              <li className="info-pill">安控 / AIoT 領域</li>
              <li className="info-pill">B2B2C 雙場景</li>
            </ul>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="section">
          <div className="section-inner">
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="section-title">作品</h2>
              <div className="ml-auto w-full sm:w-80">
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
                  搜尋作品
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="輸入關鍵字、標籤或年份…"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:border-white/30 placeholder:text-white/40"
                  aria-label="搜尋作品"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition"
                >
                  <a href={p.link} className="block" aria-label={`${p.title} – 打開作品`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.thumb}
                        alt={`${p.title} cover`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 text-sm text-white/60">
                        <span>{p.role}</span>
                        <span>{p.year}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold leading-tight">{p.title}</h3>
                      <p className="mt-2 text-white/75 text-sm leading-relaxed line-clamp-2">
                        {p.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="section">
          <div className="section-inner">
            <h2 className="section-title">下載履歷</h2>
            <p className="mt-4 text-white/80">
              可下載 PDF 版本或線上預覽。請將 <code className="px-1 rounded bg-white/10">/resume/UMIN_CHEN_Resume.pdf</code> 替換為你的實際檔案路徑。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume/UMIN_CHEN_Resume.pdf"
                download
                className="btn-primary"
                aria-label="下載履歷 PDF"
              >
                下載 PDF
              </a>
              <a
                href="/resume/UMIN_CHEN_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost"
                aria-label="線上預覽履歷"
              >
                線上預覽
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p>© {new Date().getFullYear()} UMIN CHEN. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:underline" href="#about">關於</a>
              <a className="hover:underline" href="#works">作品</a>
              <a className="hover:underline" href="#resume">履歷</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Local styles for reusable classes */}
      <style>{`
        .section { padding: 4rem 0; }
        @media (min-width: 640px) { .section { padding: 5rem 0; } }
        .section-inner { max-width: 72rem; margin-inline: auto; padding-inline: 1rem; }
        .section-title { font-weight: 700; font-size: 1.5rem; letter-spacing: -0.01em; }
        @media (min-width: 640px) { .section-title { font-size: 2rem; } }
        .btn-primary { display:inline-flex; align-items:center; gap:.5rem; border-radius:1rem; padding:.7rem 1rem; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.2); color:white; }
        .btn-primary:hover { background:rgba(255,255,255,.14); border-color:rgba(255,255,255,.3); }
        .btn-ghost { display:inline-flex; align-items:center; gap:.5rem; border-radius:1rem; padding:.7rem 1rem; background:transparent; border:1px solid rgba(255,255,255,.2); color:white; }
        .btn-ghost:hover { border-color:rgba(255,255,255,.35); background:rgba(255,255,255,.06); }
        .navlink { display:inline-flex; align-items:center; padding:.4rem .8rem; border-radius:.8rem; border:1px solid transparent; }
        .navlink:hover { border-color:rgba(255,255,255,.2); background:rgba(255,255,255,.05); }
        .tag { font-size:.75rem; padding:.25rem .6rem; border-radius:999px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.18); color:white; }
        .info-pill { padding:.6rem 1rem; border-radius:1rem; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.15); }
      `}</style>
    </div>
  );
}
