import { projects } from "../data/projects";

type Project = {
  title: string;
  desc: string;
  link: string;
};

export default function Projects() {
  return (
    <section className="min-h-screen px-10 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p: Project) => (
          <a
            key={p.title}
            href={p.link}
            className="border border-white/10 rounded p-6 hover:bg-white/5 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
