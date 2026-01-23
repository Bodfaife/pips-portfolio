import { motion } from "framer-motion"

type Props = {
  src: string
  message: string
  position: string
  delay?: number
}

export default function MinionBuddy({ src, message, position, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ amount: 0.3 }}
      className={`pointer-events-none absolute ${position} z-40 will-change-transform`}
    >
      <motion.img
        src={src}
        alt="Minion buddy"
        className="w-14 md:w-16 select-none minion-float"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-xs px-3 py-1 rounded-full whitespace-nowrap">
        {message}
      </div>
    </motion.div>
  )
}
