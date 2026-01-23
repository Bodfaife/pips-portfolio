// src/sections/Education.tsx
import { motion } from "framer-motion"
import MinionBuddy from "../components/MinionBuddy"
import minion3 from "../assets/minions/minion3.png"
import minion4 from "../assets/minions/minion4.png"

const education = [
  {
    degree: "WASSCE",
    school: "Smith International Baptist Academy",
    period: "2012 – 2015",
    desc: "Completed secondary education with a focus on science and mathematics.",
  },
  {
    degree: "SSCE",
    school: "Saint Savior's High School",
    period: "2015 – 2018",
    desc: "Completed secondary education with a focus on science and mathematics.",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Lagos State University",
    period: "2021 – 2026",
    desc: "Focused on software development, algorithms, and system design.",
  },
  
]

export default function Education() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-32" id="education">
      {/* Animated Minions */}
      <MinionBuddy src={minion3} message="Learning is fun! 📚" position="left-10 top-32" />
      <MinionBuddy src={minion4} message="Scroll for more knowledge 👀" position="right-12 bottom-24" delay={0.3} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-accent">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4 hover:border-accent transition"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-slate-400 text-sm">{edu.school} • {edu.period}</p>
              <p className="text-slate-300">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
