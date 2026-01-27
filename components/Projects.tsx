"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

type Project = {
  title: string;
  desc: string;
  link: string;
  technologies: string[];
  image?: string;
};

export default function Projects() {
  return (
    <section className="min-h-screen px-4 md:px-10 py-20 bg-black text-white">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Son Projeler
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative border border-white/15 bg-white/5/5 backdrop-blur-xl rounded-3xl p-5 md:p-6 transition-all duration-500 flex flex-col overflow-hidden hover:border-indigo-400/60 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(129,140,248,0.55)]"
          >
            {/* Görsel bölüm / Glassmorphism + Hover Zoom */}
            <div className="relative -mx-5 -mt-5 mb-5 h-44 md:h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-blue-500/40">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Başlık ve açıklama */}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-gray-300/80 mb-4 flex-grow text-sm md:text-base leading-relaxed">
              {project.desc}
            </p>
            
            {/* Teknoloji etiketleri - yarı şeffaf badge'ler */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100/90 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Projeyi Görüntüle butonu - kart hover ile slide-up */}
            <div className="mt-2 flex justify-end">
              <a
                href={project.link}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-500/10 px-4 py-2 text-xs md:text-sm font-medium text-indigo-100/90 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-indigo-500/25 hover:border-indigo-300"
              >
                Siteyi Ziyaret Et
                <span className="text-base">↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
