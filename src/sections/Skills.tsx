import { motion } from "framer-motion"

type Skill = {
  name: string
  level: string
}

const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Flutter", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "C", level: "Advanced"},
]

export default function Skills() {
  const skillStats = [
    { value: "9+", label: "Technologies" },
    { value: "2+", label: "Years Coding" },
    { value: "20+", label: "Tools & Libraries" },
    { value: "2000+", label: "Hours Practice" },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-accent">Skills</span>
        </h2>

  

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill: Skill, i: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 text-center font-semibold
                         hover:border-accent hover:scale-105 transition"
            >
              <p className="text-lg font-bold">{skill.name}</p>
              <p className="text-sm text-slate-300">{skill.level}</p>
            </motion.div>
          ))}
        </div>
              {/* StatsGrid for Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
          {skillStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8
                         backdrop-blur flex flex-col items-center justify-center
                         hover:scale-105 hover:shadow-[0_0_25px_#22c55e] transition-transform duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
