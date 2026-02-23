"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "SQL",
  "WordPress",
  "Google Ads",
  "Web Server",
  "Firebase",
  "Mail Server",
  "WooCommerce",
];

export default function Skills() {
  return (
    <section className="min-h-screen px-4 md:px-10 py-20 bg-transparent text-white flex items-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Kart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 transition-all duration-500 shadow-[0_0_50px_rgba(79,70,229,0.1)]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
          >
            Neler Yapıyorum?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group border border-white/5 bg-white/5 px-4 py-4 rounded-2xl text-center hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 cursor-default backdrop-blur-md relative overflow-hidden"
              >
                {/* Animasyonlu Hover Işığı */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="text-sm md:text-base relative z-10 group-hover:text-indigo-200 transition-colors">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
