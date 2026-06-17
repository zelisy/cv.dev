"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "json">("ts");
  const { language, setLanguage } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 xl:px-20 bg-transparent text-white relative pt-28 pb-16">
      {/* Dil Seçici - Sağ Üst */}
      <div className="absolute top-6 right-4 sm:right-10 flex gap-2 z-50">
        <button
          onClick={() => setLanguage("tr")}
          className={`px-3 py-1 rounded-lg border transition-all duration-300 backdrop-blur-md text-sm cursor-pointer ${language === "tr"
            ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
            }`}
        >
          TR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-lg border transition-all duration-300 backdrop-blur-md text-sm cursor-pointer ${language === "en"
            ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
            }`}
        >
          EN
        </button>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Sol Kolon - Geliştirici Tanıtımı */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center text-left relative z-10"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-100 to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Zeliha Yıldırım
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-6 tracking-tight">
            {t.role}
          </h3>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl font-light whitespace-pre-line">
            {t.description}
          </p>

          {/* Aksiyon Butonları (CTAs) */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 duration-200 cursor-pointer"
            >
              {t.ctaProjects}
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 duration-200 cursor-pointer"
            >
              {t.ctaContact}
            </a>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex gap-4">
            <a
              href="https://github.com/zelisy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zeliha-y%C4%B1ld%C4%B1r%C4%B1m-871ba3295/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="mailto:zelissyldrm0@gmail.com"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Sağ Kolon - Etkileşimli Kod IDE ve Profil Fotoğrafı */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center items-center py-10 lg:py-0"
        >
          {/* IDE/Code Mockup Container */}
          <div className="w-full max-w-[480px] rounded-2xl border border-white/10 bg-[#07050f]/85 backdrop-blur-xl shadow-[0_0_50px_rgba(99,102,241,0.1)] overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]">
            {/* Header / Tabs */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#110e20]/80 border-b border-white/5">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex gap-1.5 ml-4 flex-grow justify-start">
                <button
                  onClick={() => setActiveTab("ts")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer ${activeTab === "ts"
                    ? "bg-[#07050f] text-indigo-300 border border-indigo-500/20"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                >
                  <span className="text-[10px] px-1 bg-indigo-500/20 text-indigo-400 rounded-sm font-sans font-bold">
                    TS
                  </span>
                  zeliha.ts
                </button>
                <button
                  onClick={() => setActiveTab("json")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer ${activeTab === "json"
                    ? "bg-[#07050f] text-amber-300 border border-amber-500/20"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                >
                  <span className="text-[10px] px-1 bg-amber-500/20 text-amber-400 rounded-sm font-sans font-bold">
                    &#123;&#125;
                  </span>
                  sys.json
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[310px] flex">
              {/* Line Numbers */}
              <div className="text-gray-600 select-none pr-4 text-right border-r border-white/5 flex flex-col justify-between h-[262px] w-6 shrink-0">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
              </div>

              {/* Code Content */}
              <div className="pl-4 text-left flex-grow">
                {activeTab === "ts" ? (
                  <div className="text-gray-300">
                    <div>
                      <span className="text-indigo-400">const</span>{" "}
                      <span className="text-purple-300">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">name</span>:{" "}
                      <span className="text-emerald-400">&quot;Zeliha Yıldırım&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">role</span>:{" "}
                      <span className="text-emerald-400">
                        &quot;IT Specialist &amp; Web Dev&quot;
                      </span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">company</span>:{" "}
                      <span className="text-emerald-400">&quot;Bulut İletişim&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">skills</span>: [
                    </div>
                    <div className="pl-8 text-emerald-400">
                      &quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;,
                    </div>
                    <div className="pl-8 text-emerald-400">
                      &quot;WooCommerce&quot;, &quot;Prisma&quot;, &quot;Linux&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-pink-400">mailServers</span>:{" "}
                      <span className="text-emerald-400">&quot;Postfix / Dovecot&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">location</span>:{" "}
                      <span className="text-emerald-400">&quot;Ankara, Turkey&quot;</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                ) : (
                  <div className="text-gray-300">
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;server&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;Ubuntu / Debian Linux&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;infrastructure&quot;</span>: &#123;
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&quot;mail&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;IMAP/SMTP (Mail Server)&quot;</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&quot;webServer&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;Nginx, Apache&quot;</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&quot;db&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;MySQL, Prisma ORM&quot;</span>
                    </div>
                    <div className="pl-4">&#125;,</div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;status&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;operational&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-pink-400">&quot;uptimeGoal&quot;</span>:{" "}
                      <span className="text-emerald-400">&quot;99.99%&quot;</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Floating Glassmorphism Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-8 -right-4 sm:-right-8 md:-right-6 w-36 sm:w-44 bg-[#110e20]/80 border border-white/10 backdrop-blur-xl rounded-2xl p-2.5 shadow-2xl flex flex-col items-center group transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(99,102,241,0.25)]"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden relative border border-white/5 bg-[#07050f] shadow-inner">
              {!imageError ? (
                <Image
                  src="/BEN1.png"
                  alt="Zeliha Yıldırım"
                  fill
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br from-indigo-600 to-purple-700">
                  ZY
                </div>
              )}
            </div>
            <div className="mt-2 text-center w-full">
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                Zeliha Yıldırım
              </p>
              <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-indigo-300 font-medium tracking-wide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t.location}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
