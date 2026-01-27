"use client";
import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Ondokuz Mayıs Üniversitesi: Bilgisayar Programcılığı",
    date: "2023 - 2025",
    description: "Bilgisayar Programcılığı bölümünden mezun oldum.",
  },
  {
    title: "EGY Yazılım",
    date: "2025",
    description: "EGO Makine İkmal uygulamasının geliştirilme süreçlerinde aktif rol aldım. Web uygulamalarının analiz, test ve hata ayıklama süreçlerini yönettim.",
  },
  {
    title: "Agrovia Tarım Sanayi ve Ticaret",
    date: "2025",
    description: "Tarım operasyonlarının dijital kaydını tutan ve üretici takibini sağlayan kapsamlı bir web platformu geliştirdim. Maliyet hesaplama ve detaylı raporlama modülleri üzerine çalıştım.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen px-4 md:px-10 py-20 bg-black text-white flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        {/* Kart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 transition-all duration-500"
        >
          {/* Biyografi Başlığı */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
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
              className="text-white"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold">Biyografi</h2>
          </motion.div>

          {/* Biyografi Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 leading-relaxed mb-12 text-base md:text-lg"
          >
            2025 yılında Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum. Web tabanlı uygulamalar ve e-ticaret projeleri geliştirme konusunda deneyim sahibiyim. React ile frontend, Prisma ORM ile veritabanı yönetimi ve WooCommerce kullanarak ölçeklenebilir projeler geliştirdim. Analiz, test ve hata ayıklama süreçlerinde güçlü bir altyapıya sahibim.
          </motion.p>

          {/* Eğitim Başlığı */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
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
              className="text-white"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold">Eğitim & Kariyer</h3>
          </motion.div>

          {/* Zaman Çizelgesi */}
          <div className="relative pl-8">
            {/* Dikey çizgi */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/20"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative pb-8 last:pb-0"
              >
                {/* Nokta */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-4 border-black transform -translate-x-1/2"></div>
                
                <div className="pl-6">
                  <h4 className="text-xl md:text-2xl font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
