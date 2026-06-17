"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type Project = {
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  link: string;
  technologies: string[];
  image?: string;
};

const FEATURED_LINKS = new Set([
  "https://agroviatr.com",
  "https://seymabutikofficial.com",
]);

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const featured = (projects as Project[]).filter((p) => FEATURED_LINKS.has(p.link));

  return (
    <section id="projects" className="min-h-[60vh] px-4 md:px-10 py-20 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-5 md:p-6 transition-all duration-500 flex flex-col overflow-hidden hover:border-indigo-400/60 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(129,140,248,0.45)]"
            >


              <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">
                {project.title[language]}
              </h3>
              <p className="text-gray-300/80 mb-4 flex-grow text-sm md:text-base leading-relaxed">
                {project.desc[language]}
              </p>

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

              <div className="mt-2 flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-500/10 px-4 py-2 text-xs md:text-sm font-medium text-indigo-100/90 transition-all duration-300 ease-out hover:bg-indigo-500/25 hover:border-indigo-300"
                >
                  {t.visitSite}
                  <span className="text-base">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

