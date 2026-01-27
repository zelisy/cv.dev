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
    <section className="min-h-screen px-4 md:px-10 py-20 bg-black text-white flex items-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Kart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 transition-all duration-500"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Neler Yapıyorum?
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-white/10 bg-white/5 px-4 py-3 rounded-xl text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-sm"
              >
                <span className="text-sm md:text-base">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
