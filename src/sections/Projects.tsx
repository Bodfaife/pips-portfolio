

type Project = {
  title: string
  desc: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    title: "Nest",
    desc: "Savings and loans platform",
    category: "Finance",
    image: "/nest.jpg",
  },
  {
    title: "Playground",
    desc: "Gaming social media platform for gamers",
    category: "Social",
    image: "/playground.jpg",
  },
  {
    title: "Streammix",
    desc: "Music streaming platform with curated playlists",
    category: "Music",
    image: "/streammix.jpg",
  },
  {
    title: "Pips Portfolio",
    desc: "Web-styled personal portfolio",
    category: "Personal",
    image: "/portfolio.jpg",
  },
]


export default function Projects() {
  return (
    <section 
      id="projects"
    className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold mb-10">My Projects</h2>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <div
      key={project.title}
      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden
                 hover:border-accent hover:scale-[1.02] transition"
    >
      {/* IMAGE */}
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-2">
        <span className="text-xs text-accent font-semibold uppercase tracking-wide">
          {project.category}
        </span>

        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-slate-400">{project.desc}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}
