import { useRef } from 'react';
import { motion } from 'framer-motion';

// All ticker items — stats + certifications + location info
const TICKER_ITEMS = [
  { label: 'Farmers Served', value: '10,000+' },
  { label: 'Years of Excellence', value: '25+' },
  { label: 'Pump Models', value: '15+' },
  { label: 'Districts Covered', value: '50+' },
  { label: 'Certification', value: 'ISI Mark — IS 9079' },
  { label: 'Certification', value: 'BIS Approved' },
  { label: 'Certification', value: 'ISO 9001:2015' },
  { label: 'Certification', value: 'Energy Star Rated' },
  { label: 'Headquarters', value: 'Coimbatore, Tamil Nadu' },
  { label: 'Founded', value: '1999 — Tamil Nadu' },
  { label: 'Export Markets', value: 'Sri Lanka · Bangladesh · Nepal' },
  { label: 'Service Network', value: 'Pan-India Dealer Chain' },
  { label: 'Warranty', value: '2-Year Product Warranty' },
  { label: 'Support', value: '24/7 WhatsApp Helpline' },
];

// Dot separator between items
function TickerItem({ label, value }) {
  return (
    <span className="inline-flex items-center gap-3 px-6 shrink-0">
      <span className="text-xs uppercase tracking-widest font-mono" style={{ color: '#306D29' }}>
        {label}
      </span>
      <span className="w-px h-3 inline-block" style={{ background: '#306D29', opacity: 0.4 }} />
      <span className="text-sm font-bold" style={{ color: '#1a1108', fontFamily: 'Inter Tight, Inter, sans-serif' }}>
        {value}
      </span>
      <span className="ml-4 text-[#306D29] opacity-40 font-mono text-lg">✦</span>
    </span>
  );
}

export default function StatsSection() {
  // Double the items for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: '#E7E1B1',
        borderTop: '2px solid #306D29',
        borderBottom: '2px solid #306D29',
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #E7E1B1, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #E7E1B1, transparent)' }}
      />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {items.map((item, i) => (
          <TickerItem key={i} label={item.label} value={item.value} />
        ))}
      </motion.div>
    </div>
  );
}