import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Droplets, ArrowUpRight, Activity, Settings, CheckCircle, MessageCircle, ShoppingCart } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { buildWhatsAppUrl } from '@/data/products';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 modal-overlay"
            style={{ background: 'rgba(10,8,4,0.75)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg scrollbar-hide"
            style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.25)' }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label={`${product.name} details`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 rounded-full transition-all"
              style={{ background: 'rgba(10,8,4,0.4)', color: '#FBF5DD' }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Hero image — 1:1 ratio */}
            <div className="relative w-full overflow-hidden rounded-t-lg" style={{ paddingBottom: '100%' }}>
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.85) 0%, transparent 50%)' }} />
              <div className="absolute bottom-4 left-6 z-20">
                <span className="section-tag block mb-1">{product.category}</span>
                <h2 className="text-3xl font-black" style={{ fontFamily: 'Inter Tight', color: '#FBF5DD' }}>
                  {product.name}
                </h2>
                <p className="mt-1 font-semibold" style={{ color: '#E7E1B1' }}>{product.tagline}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Animated Specs */}
              <div className="mb-6">
                <h3 className="section-tag mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: <Zap size={18} />, label: 'Power Output', value: product.specs.hp, suffix: ' HP' },
                    { icon: <Droplets size={18} />, label: 'Flow Rate', value: product.specs.flowRate, suffix: ' LPH' },
                    { icon: <ArrowUpRight size={18} />, label: 'Max Head', value: product.specs.head, suffix: ' m' },
                    { icon: <Activity size={18} />, label: 'Speed', value: product.specs.rpm, suffix: ' RPM' },
                    { icon: <Settings size={18} />, label: 'Phase', value: null, text: product.specs.phase },
                    { icon: <CheckCircle size={18} />, label: 'Application', value: null, text: product.specs.application.split(' ')[0] },
                  ].map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                      className="p-3 rounded-sm"
                      style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.15)' }}
                    >
                      <div className="mb-2" style={{ color: '#306D29' }}>{spec.icon}</div>
                      <div className="font-mono text-lg font-bold" style={{ color: '#0A0804' }}>
                        {spec.value !== null ? (
                          <AnimatedCounter value={spec.value} suffix={spec.suffix} duration={0.8} />
                        ) : spec.text}
                      </div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: '#5a4e38' }}>{spec.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application */}
              <div className="mb-6 p-4 rounded-sm" style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.15)' }}>
                <span className="section-tag block mb-2">Application</span>
                <p style={{ color: '#3a3020' }}>{product.specs.application}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="section-tag mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-sm"
                      style={{ background: 'rgba(48,109,41,0.1)', border: '1px solid rgba(48,109,41,0.25)', color: '#306D29' }}
                    >
                      <CheckCircle size={12} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl(product.name, 'book')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 text-base"
                >
                  <ShoppingCart size={18} />
                  Book Now
                </a>
                <a
                  href={buildWhatsAppUrl(product.name, 'inquire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle size={18} />
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}