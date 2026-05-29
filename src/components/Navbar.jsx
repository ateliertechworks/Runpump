import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'In Action', href: '#in-action' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Support', href: '#support' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const hideTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setInHero(window.scrollY < heroHeight - 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hideTimer.current);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setVisible(false), 400);
  };

  const handleNav = (href) => {
    setMobileOpen(false);
    setVisible(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // On mobile, show after scrolling past hero
  const mobileShow = !inHero;

  return (
    <>
      {/* Hover trigger zone — invisible strip at top */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: (visible || mobileOpen || !inHero) ? 0 : -100,
          opacity: (visible || mobileOpen || !inHero) ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: inHero && !mobileOpen
            ? 'rgba(0,0,0,0)'
            : 'rgba(15, 12, 8, 0.96)',
          backdropFilter: inHero ? 'blur(0px)' : 'blur(20px)',
          borderBottom: inHero ? 'none' : '1px solid rgba(48, 109, 41, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <img
              src="https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/b4da21ebb_logo.png"
              alt="RAN Pump"
              className="h-12 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: inHero ? '#FBF5DD' : '#E7E1B1', letterSpacing: '0.1em' }}
                  onMouseEnter={e => e.target.style.color = '#306D29'}
                  onMouseLeave={e => e.target.style.color = inHero ? '#FBF5DD' : '#E7E1B1'}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+918610619891"
                className="flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-sm transition-all duration-200"
                style={{
                  background: '#306D29',
                  color: '#FBF5DD',
                  border: '1px solid #306D29',
                  minHeight: '40px',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#3d8a34'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#306D29'; }}
              >
                <Phone size={13} />
                Call Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              style={{ color: '#FBF5DD' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: 'rgba(10, 8, 4, 0.98)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNav(link.href)}
                  className="text-2xl font-bold tracking-widest uppercase transition-colors"
                  style={{ color: '#E7E1B1', fontFamily: 'Inter Tight, Inter, sans-serif' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:+918610619891"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center gap-2 px-8 py-3 rounded-sm font-bold text-base"
                style={{ background: '#306D29', color: '#FBF5DD' }}
              >
                <Phone size={16} />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}