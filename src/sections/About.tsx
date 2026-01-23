import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* LEFT – TEXT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-accent">Me</span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed">
            I’m <span className="text-accent font-bold"> Faith Bode</span> a professional <span className="text-accent font-bold">Software Developer in Nigeria</span> with a passion for clean architecture in <span className="text-xl text-slate-400">creating </span> innovative software solutions, <span className="text-xl text-slate-400">that aligns</span> technology with business objectives.
          </p>

          <p className="text-slate-300 text-xl leading-relaxed">
            If you're looking to <span className="text-accent font-bold"> develop a web platform or mobile app </span> I bring expertise in <span className="text-accent font-bold"> full-stack development, mobile app creation</span> and <span className="text-accent font-bold"> user-centered design</span>. I specialize in <span className="text-xl text-slate-400"> building high-performance applications</span> using modern technologies such as <span className="font-bold"> Flutter</span>, <span className="font-bold">React</span>, and <span className="font-bold"> Dart</span>.
          </p>

           <p className="text-slate-300 text-xl leading-relaxed">
            As a <span className="text-accent font-bold"> freelance developer</span>, I combine <span className="text-xl text-slate-400">technical proficiency</span> with <span className="text-xl text-slate-400">digital strategy insights</span> to ensure your products are not only well-built but also <span className="text-xl text-slate-400">effectively positioned</span> for the right audience. Whether you're a <span className="text-xl text-slate-400">startup or an established business,</span> I can guide your project from <span className="text-accent font-bold"> concept to launch</span>, delivering solutions that drive <span className="font-bold">real results.</span>
           </p>
          
          <a href="#contacts">
          <button className="w-full py-5 rounded-xl bg-accent text-slate-900 font-semibold hover:scale-105 transition">
          Let's build something!!
          </button>
          </a>
        </div>

        {/* RIGHT – IMAGE / CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 w-[360px] md:w-[460px] h-[400px] md:h-[500px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
        >
          <img
          src="/me5.jpg"
          alt="Pips portrait"
          className="w-full h-full object-cover" /> 
        </motion.div>
         
      </motion.div>
    </section>
  )
}
