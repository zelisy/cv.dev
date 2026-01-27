"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

type Project = {
  title: string;
  desc: string;
  link: string;
  technologies: string[];
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
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow text-sm md:text-base leading-relaxed">{project.desc}</p>
            
            {/* Teknoloji etiketleri */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Projeyi Görüntüle butonu */}
            <a
              href={project.link}
              className="inline-block text-center border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              Projeyi Görüntüle
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
