import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HEADLINE_WORDS = ["Power", "Every", "Drop."];

export default function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={imgRef}
          src="https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/7a267b487_Gemini_Generated_Image_m86tkhm86tkhm86t1.png"
          alt="RAN Pump in action - Rice field irrigation at sunset"
          className="w-full h-[120%] object-cover object-center"
          style={{ willChange: 'transform' }}
        />
        {/* Vignette — strong black corners, cream center tint */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(5,4,2,0.55) 0%, rgba(5,4,2,0.15) 35%, rgba(5,4,2,0.4) 70%, rgba(5,4,2,0.92) 100%)'
        }} />
        {/* Radial vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(5,4,2,0.65) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-px" style={{ background: '#306D29' }} />
          <span className="text-xs tracking-widest uppercase font-mono" style={{ color: '#E7E1B1', letterSpacing: '0.25em' }}>
            India's Most Trusted Pump Brand
          </span>
          <div className="w-10 h-px" style={{ background: '#306D29' }} />
        </motion.div>

        {/* Main headline */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-5">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] font-black leading-none tracking-tight"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', color: word === "Drop." ? '#E7E1B1' : '#ffffff' }}
            >
              {word === "Drop." ? (
                <span style={{ color: '#E7E1B1', textShadow: '0 2px 30px rgba(231,225,177,0.3)' }}>{word}</span>
              ) : word}
            </motion.span>
          ))}
        </div>

        {/* Subtitle — thin accent line under headline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-24 h-0.5 mb-6"
          style={{ background: '#306D29', transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed px-2 font-light"
          style={{ color: '#E7E1B1', opacity: 0.85 }}
        >
          High-performance agricultural & industrial pumps engineered for the heart of India. Reliable, powerful, and built to last.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <button
            onClick={scrollToProducts}
            className="flex items-center justify-center gap-2 text-sm font-bold px-8 py-3 rounded-sm transition-all duration-200"
            style={{ background: '#306D29', color: '#FBF5DD', minHeight: '48px', letterSpacing: '0.08em' }}
            onMouseEnter={e => e.currentTarget.style.background = '#3d8a34'}
            onMouseLeave={e => e.currentTarget.style.background = '#306D29'}
          >
            Explore Products
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.querySelector('#support')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 text-sm font-bold px-8 py-3 rounded-sm transition-all duration-200"
            style={{ border: '1px solid #E7E1B1', color: '#E7E1B1', background: 'transparent', minHeight: '48px', letterSpacing: '0.08em' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(231,225,177,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Get a Quote
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '15+', label: 'Product Models' },
            { value: '10K+', label: 'Farmers Served' },
            { value: '25+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black font-mono" style={{ color: '#E7E1B1' }}>{stat.value}</div>
              <div className="text-xs tracking-widest uppercase mt-1 font-mono" style={{ color: '#E7E1B1', opacity: 0.55 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        style={{ color: '#E7E1B1' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest font-mono">SCROLL</span>
        <ChevronDown size={20} />
      </motion.button>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #306D29, transparent)', opacity: 0.5 }} />
    </section>
  );
}