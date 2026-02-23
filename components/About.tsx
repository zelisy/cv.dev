"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const timelineItems = [
  {
    title: "EGY Yazılım ve Bilişim Teknolojileri",
    date: {
      tr: "2025 - Halen",
      en: "2025 - Present"
    },
    description: {
      tr: "Web Developer & Web Designer olarak kurumsal kimlik çalışmaları, modern e-ticaret çözümleri (WooCommerce) ve IT altyapı yönetim süreçlerini üstleniyorum. Sistem sürekliliğini sağlamak adına Sunucu ve Mail Server operasyonlarını yönetiyorum.",
      en: "As a Web Developer & Web Designer, I undertake corporate identity works, modern e-commerce solutions (WooCommerce), and IT infrastructure management processes. I manage Server and Mail Server operations to ensure system continuity."
    },
  },
  {
    title: "Agrovia Tarım Sanayi ve Ticaret",
    date: {
      tr: "2025",
      en: "2025"
    },
    description: {
      tr: "Tarım operasyonlarının dijitalizasyonu kapsamında; üretici takibi, maliyet hesaplama ve raporlama modüllerini içeren kapsamlı web platformlarının geliştirilmesinde aktif rol aldım.",
      en: "Within the scope of digitalization of agricultural operations; I took an active role in the development of comprehensive web platforms including producer tracking, cost calculation, and reporting modules."
    },
  },
  {
    title: {
      tr: "Ondokuz Mayıs Üniversitesi: Bilgisayar Programcılığı",
      en: "Ondokuz Mayıs University: Computer Programming"
    },
    date: {
      tr: "2023 - 2025",
      en: "2023 - 2025"
    },
    description: {
      tr: "Bilgisayar Programcılığı bölümünden başarıyla mezun olarak yazılım geliştirme temelleri ve modern programlama teknikleri üzerine yetkinlik kazandım.",
      en: "I successfully graduated from the Computer Programming department, gaining competence in software development fundamentals and modern programming techniques."
    },
  },
];

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="min-h-screen px-4 md:px-10 py-20 bg-transparent text-white flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        {/* Kart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl md:rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 transition-all duration-500 shadow-[0_0_50px_rgba(79,70,229,0.1)]"
        >
          {/* Biyografi Başlığı */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t.title}</h2>
          </motion.div>

          {/* Biyografi Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 leading-relaxed mb-12 text-lg md:text-xl font-light"
          >
            {t.bio}
          </motion.p>

          {/* Eğitim Başlığı */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t.careerTitle}</h3>
          </motion.div>

          {/* Zaman Çizelgesi */}
          <div className="relative pl-8">
            {/* Dikey çizgi */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative pb-10 last:pb-0"
              >
                {/* Nokta */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#030014] shadow-[0_0_15px_rgba(99,102,241,0.5)] transform -translate-x-1/2"></div>

                <div className="pl-8 group">
                  <h4 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-indigo-300 transition-colors uppercase tracking-tight">
                    {typeof item.title === 'string' ? item.title : item.title[language]}
                  </h4>
                  <p className="text-indigo-400/80 text-sm font-semibold mb-3 tracking-widest">
                    {item.date[language]}
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
                    {item.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
