"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-10 bg-transparent text-white relative pt-20">
      {/* Dil Seçici - Sağ Üst */}
      <div className="absolute top-6 right-6 flex gap-2">
        <button className="px-3 py-1 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-100 text-sm backdrop-blur-md">
          TR
        </button>
        <button className="px-3 py-1 rounded-lg border border-white/10 text-white/50 text-sm hover:border-white/30 transition backdrop-blur-md">
          EN
        </button>
      </div>

      {/* Profil Kartı */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl mx-auto"
      >
        {/* Gradient Arka Planlı Kart */}
        <div
          className="relative rounded-[2.5rem] backdrop-blur-xl border border-white/10 p-8 md:p-12 pt-24 md:pt-28 transition-all duration-500 shadow-[0_0_50px_rgba(79,70,229,0.05)] bg-white/5"
        >
          {/* Profil Fotoğrafı - Kartın Üstüne Taşan */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#030014] overflow-hidden relative shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              {!imageError ? (
                <Image
                  src="/BEN.jpeg"
                  alt="Zeliha Yıldırım"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-indigo-600 to-purple-700"
                >
                  ZY
                </div>
              )}
            </div>
          </motion.div>

          {/* İsim */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-6 mt-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          >
            Zeliha Yıldırım
          </motion.h1>

          {/* Badge'ler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {/* Frontend Developer & Web Developer Badge */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400 group-hover:scale-110 transition-transform"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              <span className="text-sm md:text-base text-gray-200">Yazılım Geliştiricisi & Web Developer</span>
            </div>

            {/* Konum Badge */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-400 group-hover:scale-110 transition-transform"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm md:text-base text-gray-200">Ankara/Türkiye</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
