import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

type Behavior =
  | "float"
  | "spin"
  | "travelLR"
  | "travelRL"
  | "peekTL"
  | "peekTR"
  | "peekBL"
  | "peekBR"

type Minion = {
  id: number
  src: string
  messages: string[]
  x: number // %
  y: number // px on page
  behavior: Behavior
}

export default function MinionField({ images }: { images: string[] }) {
  const [pageHeight, setPageHeight] = useState(0)

  /* measure full page height */
  useEffect(() => {
    const measure = () => setPageHeight(document.body.scrollHeight)
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const minions = useMemo<Minion[]>(() => {
    const behaviors: Behavior[] = [
      "spin",
      "spin",
      "travelLR",
      "travelRL",
      "peekTL",
      "peekTR",
      "peekBL",
      "peekBR",
      "float",
      "float",
      "float",
      "float",
      "float",
      "float",
      "float",
      "float",
    ]

    return images.map((src, i) => ({
      id: i,
      src,
      messages: ["Hey 👀", "Hire my friend!!😭", "Hi, friend👋", "Looks fire, yeah?🔥", "Rate me!😍", "See, I'm floatinggg😁", "Click Me!!🤭", "Hire Him!😭", "Love it?😍"],
      x: Math.random() * 80 + 10, // keep some margin
      y: ((i + Math.random()) / images.length) * pageHeight,
      behavior: behaviors[i % behaviors.length],
    }))
  }, [images, pageHeight])

  return (
    <>
      {minions.map((m) => (
        <MinionItem key={m.id} minion={m} />
      ))}
    </>
  )
}

/* ---------------------------------- */

function MinionItem({ minion }: { minion: Minion }) {
  const [speech, setSpeech] = useState(minion.messages[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeech(
        minion.messages[
          Math.floor(Math.random() * minion.messages.length)
        ]
      )
    }, 3500)
    return () => clearInterval(interval)
  }, [minion.messages])

  let animate: any = {}
  let transition: any = { repeat: Infinity, ease: "easeInOut" }

  switch (minion.behavior) {
    case "float":
      animate = { y: [0, -10, 0] }
      transition.duration = 4
      break

    case "spin":
      animate = { rotate: [0, 360] }
      transition.duration = 12
      break

    case "travelLR":
      animate = { x: ["-15vw", "15vw", "-15vw"] }
      transition.duration = 18
      break

    case "travelRL":
      animate = { x: ["15vw", "-15vw", "15vw"] }
      transition.duration = 18
      break

    case "peekTL":
      animate = { x: [-30, 0, -30], y: [-30, 0, -30] }
      transition.duration = 6
      break

    case "peekTR":
      animate = { x: [30, 0, 30], y: [-30, 0, -30] }
      transition.duration = 6
      break

    case "peekBL":
      animate = { x: [-30, 0, -30], y: [30, 0, 30] }
      transition.duration = 6
      break

    case "peekBR":
      animate = { x: [30, 0, 30], y: [30, 0, 30] }
      transition.duration = 6
      break
  }

  return (
   <motion.div
  className="pointer-events-none absolute z-30"
  style={{
    left: `${minion.x}%`,
    top: minion.y,
  }}
  animate={animate}       // <-- move the entire div, not just img
  transition={transition}
>
  <motion.img
    src={minion.src}
    className="w-14 md:w-16 select-none"
  />

  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black/70 px-2 py-1 rounded-full whitespace-nowrap">
    {speech}
  </div>
</motion.div>
  )
}
