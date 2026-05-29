import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 0.8, suffix = '', prefix = '', className = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = 0;
    const end = parseFloat(value);
    const steps = 60;
    const increment = (end - start) / steps;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={started ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {prefix}{Number.isInteger(parseFloat(value)) ? Math.round(count) : count.toFixed(1)}{suffix}
    </motion.span>
  );
}