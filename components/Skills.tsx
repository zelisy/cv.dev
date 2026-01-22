export default function Skills() {
    return (
      <section className="min-h-screen px-10 py-20 bg-[#0b0b0b] text-white">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <span className="border border-white/10 px-4 py-2 rounded">React</span>
          <span className="border border-white/10 px-4 py-2 rounded">Next.js</span>
          <span className="border border-white/10 px-4 py-2 rounded">Tailwind CSS</span>
          <span className="border border-white/10 px-4 py-2 rounded">JavaScript</span>
          <span className="border border-white/10 px-4 py-2 rounded">TypeScript</span>
          <span className="border border-white/10 px-4 py-2 rounded">Prisma</span>
          <span className="border border-white/10 px-4 py-2 rounded">SQLite</span>
          <span className="border border-white/10 px-4 py-2 rounded">Git</span>
        </div>
      </section>
    );
  }
  