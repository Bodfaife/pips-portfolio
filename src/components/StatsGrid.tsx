import { useEffect, useRef } from "react";

type Stat = {
  value: string;
  label: string;
  emoji?: string; // optional
};

type Props = {
  stats: Stat[];
};

export default function StatsGrid({ stats }: Props) {
 const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const target = parseInt(stats[index].value.replace(/\D/g, ""));
      let current = 0;
      const step = target / 100;

      const update = () => {
        current += step;
        if (current < target) {
          counter.innerText = Math.floor(current).toString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toString();
        }
      };

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              update();
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(counter);
    });
  }, [stats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8
                     backdrop-blur flex flex-col items-center justify-center text-center
                     hover:scale-105 hover:shadow-[0_0_25px_#22c55e] transition-transform duration-300"
        >
          <p
            className="flex items-center justify-center gap-2
             text-3xl md:text-4xl font-bold text-accent"
            >
            {stat.emoji && (
             <span className="text-2xl md:text-3xl">
              {stat.emoji}
            </span>
             )}

          <span
            ref={(el) => {
            if (el) countersRef.current[idx] = el;
             }}
          >
               0
            </span>
          </p>


          <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
