import { motion } from "framer-motion"
import { FaTwitter, FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import StatsGrid from "../components/StatsGrid"

export default function Hero() {
  const icons = [
    { icon: FaTwitter, link: "https://x.com/Pips_Titan" },
    { icon: FaWhatsapp, link: "https://wa.me/2348081544153" },
    { icon: FaEnvelope, link: "mailto:faithbode9@gmail.com" },
    { icon: FaGithub, link: "https://www.github.com/Bodfaife" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/faith-bode-2791b73a3" },
  ]

  const heroStats = [
    { value: "2+", label: "Years Experience",  emoji: "⏳" },
    { value: "10+", label: "Projects Completed",emoji: "📂" },
    { value: "10+", label: "Happy Clients",  emoji: "🤝" },
    { value: "9+", label: "Technologies", emoji: "💻" },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-40 pb-28"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-accent">Pips</span>
          </h1>

          <p className="text-xl text-slate-400">
            A Software programmer, Forex trader, and Computer Science graduate
            with a passion for building software that feels alive — plus a
            half-baked architecture student (so now you know where my love for
            clean architecture comes from 😄).
          </p>

          <p className="text-xl text-slate-400">
            I care deeply about clean architecture, beautiful and captivating UI,
            smooth rendering and performance, and experiences users genuinely
            enjoy.
          </p>

          <p className="text-xl text-slate-400">
            I mix clean architecture with personality — crafting products that
            feel alive. From frontend motion and interaction to backend logic and
            structure, I enjoy turning ideas into polished products.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-10">
            {icons.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-950 border-2 border-slate-900"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2 + i * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="text-accent w-6 h-6" />
                </motion.a>
              )
            })}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10">
            <a href="#contacts">
              <button className="w-full py-5 rounded-xl bg-accent text-slate-900 font-semibold hover:scale-105 transition">
                Let’s build something!!
              </button>
            </a>

            <a href="#projects">
              <button className="w-full py-3 mt-4 rounded-xl bg-transparent border border-slate-400 text-slate-200 font-semibold hover:scale-105 transition flex items-center justify-center">
                See My Work
              </button>
            </a>
          </div>

          {/* STATS */}
          <div className="mt-16">
            <StatsGrid stats={heroStats} />
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 w-[360px] md:w-[460px] h-[400px] md:h-[500px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
        >
          <img
            src="/me1.jpg"
            alt="Pips portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}
