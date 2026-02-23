"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen px-4 md:px-10 py-20 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                    İş Deneyimi
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-indigo-500/50 hover:bg-white/10"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        {exp.company}
                                    </h3>
                                    <p className="text-indigo-400 font-medium text-lg">{exp.role}</p>
                                </div>
                                <div className="px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-semibold self-start md:self-center">
                                    {exp.period}
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                                {exp.description}
                            </p>

                            {exp.projects && exp.projects.length > 0 && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-semibold text-indigo-100/90 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-indigo-500/50"></span>
                                        Projeler
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {exp.projects.map((project, pIdx) => (
                                            <div
                                                key={pIdx}
                                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-400/30 transition-all duration-300"
                                            >
                                                <h5 className="font-bold text-white mb-2">{project.name}</h5>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
