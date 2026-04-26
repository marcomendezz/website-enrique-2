"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 30, prefix: "$", suffix: "M+", label: "In Career Sales" },
  { value: 200, suffix: "+", label: "Properties Sold" },
  { value: 20, label: "Top Agent in BCS", prefix: "TOP " },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp: number;
    const duration = 2500; // 2.5 seconds
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate eased out value mapping
      const currentVal = progress === 1 ? value : Math.floor(progress * value);
      setCount(currentVal);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-geist-mono)] tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 border-y border-gold-dim">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
              className="text-center lg:text-left"
            >
              <div className="text-3xl md:text-5xl text-gold tracking-tight mb-2">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm text-muted tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
