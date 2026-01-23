import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Event data
type TimelineEvent = {
  year: string
  title: string
  description: string
  image: string
}
const events: TimelineEvent[] = [

  {
    year: "Feb 2023",
    title: "CodeSignal Introduction to HTML",
    description: "HTML, Introduction to Front-End Engineering",
    image: "/codesignal.png",
  },
  {
    year: "April 2023",
    title: "Meta Introduction to Front-End Development",
    description: "HTML and CSS Basics, React Basics.",
    image: "/meta intro.png",
  },
  {
    year: "Sept 2023",
    title: "Meta Front-End Developer",
    description: "HTML and CSS in depth, React Basics, UI/UX Design, Advanced React.",
    image: "/Meta frontend.png",
  },
  {
    year: "Feb 2024",
    title: "W3schools Modern Web Developer",
    description: "Gained my cert in Website Development.",
    image: "/certified web.png",
  },
  {
    year: "May 2024",
    title: "GSDC Certified Full Stack Developer",
    description: "Certification Body for Professionals.",
    image: "/gsdc.png",
  },
  {
    year: "Feb 2025",
    title: "Machine Learning",
    description: "Gained my cert in Machine Learning",
    image: "/stanford online.png",
  },
  {
    year: "May 2025",
    title: "Software Development Expert",
    description: "Gained my cert in Software Development",
    image: "/software certified.png",
  },
  {
    year: "Dec 2025",
    title: "Simplilearn SkillUP Fundamentals of Software Development",
    description: "Gained another cert in Software Development",
    image: "/simplilearn.png",
  },
]

export default function Timeline() {
  const [animationTrigger, setAnimationTrigger] =
    React.useState<number>(0)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      setAnimationTrigger((prev) => prev + 1)
    }
  }, [inView])



  return (
    <section
      id="timeline"
      ref={ref}
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-40"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        My <span className="text-accent">Journey</span>
      </h2>

       <p className="text-xl text-slate-400 text-center justify-center">
        Journey with me through the certifications that built my expertise and shaped my growth
       </p>

      <div className="relative h-[850px] md:h-[750px] overflow-visible">
        {events.map((event, i) => {
          const isAbove = i % 2 === 0

         const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768

          const CARD_GAP = isMobile ? 80 : 50
          const startX = 100 + i * CARD_GAP
          const endX = -120
          const distance = startX - endX
          const speed = 10
          const duration = distance / speed

          return (
            <motion.div
              key={`${i}-${animationTrigger}`}
              initial={{ x: `${startX}vw` }}
              animate={{ x: `${endX}vw` }}
              transition={{ duration, ease: "linear" }}
              className={`
                absolute
                ${isAbove
                  ? "top-[calc(65%-300px)] md:top-[calc(58%-320px)]"
                  : "top-[calc(65%+60px)] md:top-[calc(58%+80px)]"}
                w-64 md:w-80
                flex flex-col items-center
              `}
            >
              <div className="w-59 md:w-80 h-25 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="mt-4 text-center max-w-xs text-white">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-slate-300 text-sm mt-1">
                  {event.description}
                </p>
              </div>
            </motion.div>
          )
        })}

        <div className="absolute top-[68%] md:top-[58%] left-0 w-full h-[2px] bg-white/10" />
      </div>
    </section>
  )
}
