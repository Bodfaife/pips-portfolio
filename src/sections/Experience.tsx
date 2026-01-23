// src/sections/Experience.tsx
import { motion } from "framer-motion"
import MinionBuddy from "../components/MinionBuddy"
import minion1 from "../assets/minions/minion1.png"
import minion2 from "../assets/minions/minion2.png"

const experiences = [
  {
    role: "Software Developer",
    company: "Pips",
    period: "Jan 2024 – Present",
    desc: "Building interactive web applications with React and Tailwind CSS.",
  },
  {
    role: "Software Engineer Intern",
    company: "InnovateX",
    period: "Jun 2023 – Dec 2023",
    desc: "Worked on internal tools and API integrations using Node.js.",
  },
  {
    role: "Computer Operator",
    company: "Bafuto Institute of Technology",
    period: "Jan 2021 – Sept 2021",
    desc: "Worked on internal tools and API integrations using Node.js.",
  },
]

export default function Experience() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-32" id="experience">
      {/* Animated Minions */}
      <MinionBuddy src={minion1} message="Coding time! 💻" position="left-6 top-24" />
      <MinionBuddy src={minion2} message="I see you scrolling 👀" position="right-10 bottom-20" delay={0.2} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-accent">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4 hover:border-accent transition"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-slate-400 text-sm">{exp.company} • {exp.period}</p>
              <p className="text-slate-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
