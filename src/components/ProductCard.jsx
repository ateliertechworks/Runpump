import { motion } from 'framer-motion';
import { Zap, Droplets, ArrowUpRight, ShoppingCart } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/products';

const categoryColors = {
<<<<<<< HEAD
  Agricultural: { bg: 'rgba(48,109,41,0.12)', text: '#306D29', border: 'rgba(48,109,41,0.3)' },
  Submersible:  { bg: 'rgba(30,80,120,0.12)', text: '#3a7ab5', border: 'rgba(30,80,120,0.3)' },
  Industrial:   { bg: 'rgba(120,70,20,0.12)', text: '#a0651a', border: 'rgba(120,70,20,0.3)' },
  Solar:        { bg: 'rgba(150,120,0,0.12)', text: '#9a7c00', border: 'rgba(150,120,0,0.3)' },
  Domestic:     { bg: 'rgba(90,40,120,0.12)', text: '#7a4a9e', border: 'rgba(90,40,120,0.3)' },
  Construction: { bg: 'rgba(140,40,20,0.12)', text: '#b03818', border: 'rgba(140,40,20,0.3)' },
  Specialty:    { bg: 'rgba(48,109,41,0.12)', text: '#306D29', border: 'rgba(48,109,41,0.3)' },
=======
  'Borewell Submersible Pumps': { bg: 'rgba(30,80,120,0.12)', text: '#3a7ab5', border: 'rgba(30,80,120,0.3)' },
  'Dewatering & Sewage Pumps': { bg: 'rgba(120,70,20,0.12)', text: '#a0651a', border: 'rgba(120,70,20,0.3)' },
  'Openwell Submersible Pumps': { bg: 'rgba(48,109,41,0.12)', text: '#306D29', border: 'rgba(48,109,41,0.3)' },
  'Pressure Boosting Pumps': { bg: 'rgba(90,40,120,0.12)', text: '#7a4a9e', border: 'rgba(90,40,120,0.3)' },
  'Self Priming Monobloc Pumps': { bg: 'rgba(150,120,0,0.12)', text: '#9a7c00', border: 'rgba(150,120,0,0.3)' },
>>>>>>> 3b14275 ( rework for the product info)
};

export default function ProductCard({ product, onClick, index }) {
  const cc = categoryColors[product.category] || categoryColors.Agricultural;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative cursor-pointer rounded-lg overflow-hidden"
      style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.15)', transition: 'border-color 0.2s' }}
      onClick={() => onClick(product)}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(48,109,41,0.5)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(48,109,41,0.15)'}
      aria-labelledby={`product-name-${product.id}`}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-20">
          <span className="font-mono text-[10px] px-2 py-1 rounded-sm tracking-widest uppercase" style={{ background: 'rgba(48,109,41,0.1)', color: '#306D29', border: '1px solid rgba(48,109,41,0.25)' }}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Image — 1:1 ratio */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: '100%' }}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.55) 0%, transparent 60%)' }} />
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: cc.bg, color: cc.text, border: `1px solid ${cc.border}` }}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          id={`product-name-${product.id}`}
          className="text-lg font-black mb-1 transition-colors"
          style={{ fontFamily: 'Inter Tight, Inter, sans-serif', color: '#0A0804' }}
        >
          {product.name}
        </h3>
        <p className="text-sm mb-4" style={{ color: '#5a4e38' }}>{product.tagline}</p>

        {/* Key specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: <Zap size={12} />, label: 'HP', value: product.specs.hp },
            { icon: <Droplets size={12} />, label: 'LPH', value: product.specs.flowRate },
            { icon: <ArrowUpRight size={12} />, label: 'Head(m)', value: product.specs.head },
          ].map((spec) => (
            <div key={spec.label} className="text-center p-2 rounded-sm" style={{ background: '#E7E1B1' }}>
              <div className="flex items-center justify-center mb-1" style={{ color: '#306D29' }}>{spec.icon}</div>
              <div className="font-mono text-xs font-bold" style={{ color: '#0A0804' }}>{spec.value}</div>
              <div className="font-mono text-[10px]" style={{ color: '#5a4e38' }}>{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Phase + view details */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs" style={{ color: '#5a4e38' }}>{product.specs.phase}</span>
          <span className="flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#306D29' }}>
            View Details <ArrowUpRight size={12} />
          </span>
        </div>

        {/* Book Now */}
        <a
          href={buildWhatsAppUrl(product.name, 'book')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm font-bold text-sm transition-all duration-200 active:scale-95"
          style={{ background: '#306D29', color: '#FBF5DD', minHeight: '44px' }}
          onMouseEnter={e => e.currentTarget.style.background = '#3d8a34'}
          onMouseLeave={e => e.currentTarget.style.background = '#306D29'}
        >
          <ShoppingCart size={15} />
          Book Now on WhatsApp
        </a>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: '#306D29', originX: 0 }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}