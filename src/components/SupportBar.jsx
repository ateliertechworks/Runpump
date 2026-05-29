import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown, Send, MapPin, Phone, Mail, ExternalLink, Facebook, Instagram, Youtube } from 'lucide-react';
import { buildSupportWhatsAppUrl, buildWhatsAppUrl, PRODUCTS } from '@/data/products';
import ScrollReveal from './ScrollReveal';
import { CONTACT_PANEL_IMG_URL } from '@/assets/images';

const SUPPORT_CATEGORIES = [
  { value: 'Sales Query', label: '🛒 Sales Query', desc: 'Pricing, availability & purchase' },
  { value: 'Service Request', label: '🔧 Service Request', desc: 'Repair, maintenance & installation' },
  { value: 'Complaint', label: '⚠️ Complaint', desc: 'Report an issue or problem' },
  { value: 'Technical Support', label: '⚙️ Technical Support', desc: 'Setup, specs & troubleshooting' },
];

const QUICK_QUERIES = [
  "What's the price of the solar pump?",
  "I need installation for my new pump",
  "My pump is not starting",
  "What warranty do you offer?",
  "Spare parts availability",
  "I want to book a pump",
];

export default function SupportBar() {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!category) return;
    const url = buildSupportWhatsAppUrl(category, message, product);
    window.open(url, '_blank');
  };

  return (
    <section id="support" className="relative py-20 px-4" style={{ background: '#FBF5DD' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#306D29' }}>Direct Support</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
            Get in Touch<br />
            <span style={{ color: '#306D29' }}>Instantly.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#5a4e38' }}>
            Select your query type and connect directly with our team on WhatsApp in seconds.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

            {/* ── LEFT: Contact Us ── */}
            <div className="lg:col-span-2 rounded-lg flex flex-col overflow-hidden" style={{ background: '#306D29' }}>
              {/* Top image strip */}
              <div className="relative h-44 shrink-0 overflow-hidden">
                <img
                  src={CONTACT_PANEL_IMG_URL}
                  alt="RAN Pump factory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #306D29 100%)' }} />
              </div>
              {/* Content fills remaining height */}
              <div className="flex flex-col gap-6 p-8 flex-1">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: '#E7E1B1', opacity: 0.7 }}>Contact Us</span>
                <h3 className="text-3xl font-black mb-3" style={{ fontFamily: 'Inter Tight', color: '#FBF5DD' }}>
                  We're Here<br />For You.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#E7E1B1', opacity: 0.75 }}>
                  Have questions about our pumps or need a custom solution? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(251,245,221,0.12)' }}>
                    <MapPin size={16} style={{ color: '#E7E1B1' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: '#FBF5DD' }}>Our Address</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#E7E1B1', opacity: 0.75 }}>
                      6/180 – A, Arasamara Thottam, Thudiyalur Road,<br />
                      Vaiyampalayam, Coimbatore, Tamil Nadu – 641110
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'rgba(251,245,221,0.12)' }}>
                    <Phone size={16} style={{ color: '#E7E1B1' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: '#FBF5DD' }}>Call Now</p>
                    <a href="tel:+918610619891" className="block text-sm" style={{ color: '#E7E1B1', opacity: 0.75 }}>+91 86106 19891</a>
                    <a href="tel:+919626215925" className="block text-sm" style={{ color: '#E7E1B1', opacity: 0.75 }}>+91 96262 15925</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'rgba(251,245,221,0.12)' }}>
                    <Mail size={16} style={{ color: '#E7E1B1' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: '#FBF5DD' }}>Email Us</p>
                    <a href="mailto:ranpumpsindustries@gmail.com" className="text-sm" style={{ color: '#E7E1B1', opacity: 0.75 }}>ranpumpsindustries@gmail.com</a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'rgba(251,245,221,0.12)' }}>
                    <ExternalLink size={16} style={{ color: '#E7E1B1' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-2" style={{ color: '#FBF5DD' }}>Follow Us</p>
                    <div className="flex gap-2">
                      {[
                        { icon: <Facebook size={15} />, href: 'https://www.facebook.com/ranpumps', label: 'Facebook' },
                        { icon: <Instagram size={15} />, href: 'https://www.instagram.com/ranpumps', label: 'Instagram' },
                        { icon: <Youtube size={15} />, href: 'https://www.youtube.com/@ranpumps', label: 'YouTube' },
                        { icon: <MessageCircle size={15} />, href: buildWhatsAppUrl('General', 'inquire'), label: 'WhatsApp' },
                      ].map(social => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="p-2 rounded-sm transition-all"
                          style={{ border: '1px solid rgba(251,245,221,0.3)', color: '#FBF5DD', opacity: 0.7 }}
                          onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.borderColor = 'rgba(251,245,221,0.7)'; }}
                          onMouseLeave={e => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.borderColor = 'rgba(251,245,221,0.3)'; }}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons — pushed to bottom */}
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                <a
                  href={buildWhatsAppUrl('General', 'inquire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-sm transition-all"
                  style={{ background: '#FBF5DD', color: '#306D29' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#E7E1B1'}
                  onMouseLeave={e => e.currentTarget.style.background = '#FBF5DD'}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Vaiyampalayam,Coimbatore,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-sm transition-all"
                  style={{ border: '1px solid rgba(251,245,221,0.4)', color: '#FBF5DD', background: 'transparent' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(251,245,221,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <ExternalLink size={15} />
                  Get Directions
                </a>
              </div>
              </div>{/* end content */}
            </div>

            {/* ── RIGHT: Query Form ── */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden flex flex-col" style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.2)' }}>
            {/* Category selector */}
            <div className="p-6" style={{ borderBottom: '1px solid rgba(48,109,41,0.15)' }}>
              <label className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#306D29' }}>1. Select Query Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {SUPPORT_CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-3 rounded-sm text-left transition-all duration-200"
                    style={{
                      border: `1px solid ${category === cat.value ? '#306D29' : 'rgba(48,109,41,0.25)'}`,
                      background: category === cat.value ? 'rgba(48,109,41,0.12)' : '#FBF5DD',
                    }}
                  >
                    <div className="text-sm font-bold mb-1" style={{ color: '#0A0804' }}>{cat.label}</div>
                    <div className="text-xs" style={{ color: '#5a4e38' }}>{cat.desc}</div>
                    {category === cat.value && (
                      <motion.div layoutId="cat-indicator" className="w-full h-0.5 mt-2 rounded" style={{ background: '#306D29' }} />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product selector */}
            <div className="p-6" style={{ borderBottom: '1px solid rgba(48,109,41,0.15)' }}>
              <label className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#306D29' }}>2. Select Product (Optional)</label>
              <div className="relative">
                <select
                  value={product}
                  onChange={e => setProduct(e.target.value)}
                  className="w-full px-4 py-3 pr-10 rounded-sm appearance-none text-sm focus:outline-none cursor-pointer"
                  style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.25)', color: '#0A0804' }}
                >
                  <option value="">-- Select a Product (Optional) --</option>
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#5a4e38' }} />
              </div>
            </div>

            {/* Message area */}
            <div className="p-6" style={{ borderBottom: '1px solid rgba(48,109,41,0.15)' }}>
              <label className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: '#306D29' }}>3. Describe Your Query</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {QUICK_QUERIES.map(q => (
                  <button
                    key={q}
                    onClick={() => setMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-sm transition-all duration-200"
                    style={{
                      background: message === q ? 'rgba(48,109,41,0.15)' : '#FBF5DD',
                      border: `1px solid ${message === q ? '#306D29' : 'rgba(48,109,41,0.25)'}`,
                      color: '#3a3020',
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message here or select a quick query above..."
                rows={4}
                className="w-full px-4 py-3 rounded-sm text-sm resize-none focus:outline-none"
                style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.2)', color: '#0A0804' }}
              />
            </div>

            {/* Preview & Send */}
            <div className="p-6 flex-1 flex flex-col justify-end">
              <AnimatePresence>
                {category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 p-4 rounded-sm overflow-hidden"
                    style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.2)' }}
                  >
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: '#306D29' }}>WhatsApp Message Preview:</p>
                    <p className="text-sm leading-relaxed font-mono" style={{ color: '#3a3020' }}>
                      Hello RAN Pump! 🔧<br />
                      I require a <span className="font-bold" style={{ color: '#306D29' }}>{category}</span>
                      {product && <> for the <span className="font-bold" style={{ color: '#306D29' }}>{product}</span></>}.<br />
                      {message && <>Details: {message}</>}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleSend}
                disabled={!category}
                whileHover={category ? { scale: 1.01 } : {}}
                whileTap={category ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-sm font-bold text-base flex items-center justify-center gap-3 transition-all duration-200"
                style={{
                  background: category ? '#306D29' : 'rgba(48,109,41,0.1)',
                  color: category ? '#FBF5DD' : '#E7E1B1',
                  opacity: category ? 1 : 0.5,
                  minHeight: '56px',
                  cursor: category ? 'pointer' : 'not-allowed',
                  border: '1px solid rgba(48,109,41,0.3)',
                }}
              >
                <MessageCircle size={20} />
                {category ? `Send ${category} on WhatsApp` : 'Select a Query Type to Continue'}
                {category && <Send size={16} />}
              </motion.button>
            </div>
          </div>{/* end right col */}
          </div>{/* end grid */}
        </ScrollReveal>
      </div>
    </section>
  );
}