import { motion } from "framer-motion";
import { FaTwitter, FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const icons = [
    { icon: FaTwitter, link: "https://X.com/@Pips_Titan" },
    { icon: FaWhatsapp, link: "https://wa.me/+2348081544153" },
    { icon: FaEnvelope, link: "mailto:faithbode9@gmail.com" },
    { icon: FaGithub, link: "https://www.github.com/Bodfaife" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/faith-bode-2791b73a3" },
  ];

  return (
    <section
      id="contacts"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Let's build something <span className="text-accent">Exceptional</span>
        </h2>

        <p className="flex text-left gap-8 mt-12 text-slate-400 text-lg max-w-2xl">
          I’d love to work with you! Whether it’s a project, collaboration or opportunity, or just want to connect
          drop me a message below.
        </p>

        <form className="grid gap-6 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-400 focus:border-accent outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-400 focus:border-accent outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-400 focus:border-accent outline-none transition"
            rows={5}
          />

          <a href="mailto:faithbode9@gmail.com?subject=Let's%20Build%20Something%20Great&body=Hi%20Pips,%0A%0AI%20would%20like%20to%20work%20with%20you.">
          <button type="button" 
          className="px-6 py-3 rounded-xl bg-accent text-slate-900 font-semibold hover:scale-105 transition">
            Send Message
          </button>
          </a>
          
        </form>

        {/* Social Icons */}
        <div className="flex text-left gap-4 mt-12">
          {icons.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-950 border-2 border-slate-950 transition"
                animate={{ y: [0, -6, 0] }} // floating motion
                transition={{ repeat: Infinity, duration: 2 + i * 0.5, ease: "easeInOut" }}
                
              >
                <IconComponent className="text-accent w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
