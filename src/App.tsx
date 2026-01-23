import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import TimelineCard from "./sections/TimelineCard"
import Contact from "./sections/Contacts"
import MinionField from "./components/MinionField"
import Education from "./sections/Education"

// Minion images
import minion1 from "./assets/minions/minion1.png"
import minion2 from "./assets/minions/minion2.png"
import minion3 from "./assets/minions/minion3.png"
import minion4 from "./assets/minions/minion4.png"
import minion5 from "./assets/minions/minion5.png"
import minion6 from "./assets/minions/minion6.png"
import minion7 from "./assets/minions/minion7.png"
import minion8 from "./assets/minions/minion8.png"
import minion9 from "./assets/minions/minion9.png"
import minion10 from "./assets/minions/minion10.png"
import minion11 from "./assets/minions/minion11.png"
import minion12 from "./assets/minions/minion12.png"
import minion13 from "./assets/minions/minion13.png"
import minion14 from "./assets/minions/minion14.png"
import bad_minion from "./assets/minions/bad_minion.png"
import evil_minion from "./assets/minions/evil_minion.png"

const minionImages = [
  minion1,
  minion2,
  minion3,
  minion4,
  minion5,
  minion6,
  minion7,
  minion8,
  minion9,
  minion10,
  minion11,
  minion12,
  minion13,
  minion14,
  bad_minion,
  evil_minion,
]

export default function App() {
  return (
<div className="relative min-h-[300vh] overflow-hidden">
  <MinionField images={minionImages} />

      {/* SITE CONTENT */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <TimelineCard />   
      <Contact />
    </div>
  )
}
