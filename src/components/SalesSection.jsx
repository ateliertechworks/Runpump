import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { buildWhatsAppUrl } from '@/data/products';
import { CheckCircle, MessageCircle, Phone, Truck, ShieldCheck, CreditCard } from 'lucide-react';

const OFFERS = [
  { icon: <Truck size={22} />, title: 'Free Installation', desc: 'Expert installation at your site, completely free with every purchase above ₹15,000.' },
  { icon: <ShieldCheck size={22} />, title: '2 Year Warranty', desc: 'All RAN pumps come with 2-year comprehensive warranty + 5-year motor warranty.' },
  { icon: <CreditCard size={22} />, title: 'Easy EMI', desc: 'Zero-cost EMI available on all orders. Agriculture loans assistance provided.' },
  { icon: <Phone size={22} />, title: '24/7 Support', desc: 'Round-the-clock customer support for urgent field requirements.' },
];

const CATEGORIES_SALE = [
  { name: 'Agricultural Pumps', range: '₹4,500 – ₹45,000', models: 4 },
  { name: 'Submersible Pumps', range: '₹8,000 – ₹80,000', models: 3 },
  { name: 'Solar Pump Sets', range: '₹35,000 – ₹1,20,000', models: 2 },
  { name: 'Industrial Pumps', range: '₹25,000 – ₹2,50,000', models: 3 },
  { name: 'Domestic Pumps', range: '₹3,500 – ₹18,000', models: 2 },
  { name: 'Specialty Pumps', range: '₹50,000 – ₹5,00,000', models: 1 },
];

export default function SalesSection() {
  return (
    <section id="sales" className="relative py-24 px-4" style={{ background: '#0F172A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="section-tag block mb-3">Sales & Pricing</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] mb-4" style={{ fontFamily: 'Inter Tight' }}>
            Power Your Farm.<br />
            <span className="text-[#2DD4BF]">At Every Budget.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            From small homeowners to large agricultural estates — we have the right pump at the right price.
          </p>
        </ScrollReveal>

        {/* Price table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {CATEGORIES_SALE.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 0.08}>
              <motion.div
                className="p-5 rounded-xl card-ghost-border group cursor-pointer"
                style={{ background: '#1E293B' }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#F8FAFC] group-hover:text-[#2DD4BF] transition-colors">{cat.name}</h3>
                  <span className="font-mono text-xs text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-1 rounded">
                    {cat.models} Models
                  </span>
                </div>
                <div className="font-mono text-lg font-bold text-[#2DD4BF] mb-3">{cat.range}</div>
                <a
                  href={buildWhatsAppUrl(cat.name, 'inquire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#2DD4BF] transition-colors"
                >
                  <MessageCircle size={14} />
                  Get Best Price
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Offers grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {OFFERS.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl text-center"
                style={{ background: 'rgba(45,212,191,0.04)', border: '1px solid rgba(45,212,191,0.12)' }}
              >
                <div className="flex justify-center mb-3 text-[#2DD4BF]">{offer.icon}</div>
                <h4 className="font-bold text-[#F8FAFC] mb-2">{offer.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(45,212,191,0.05))', border: '1px solid rgba(45,212,191,0.2)' }}
          >
            <div className="absolute inset-0 blueprint-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-[#F8FAFC] mb-4" style={{ fontFamily: 'Inter Tight' }}>
                Ready to Power Your Fields?
              </h3>
              <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">Talk to our sales experts. Get personalized recommendations and best pricing.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={buildWhatsAppUrl('General Inquiry', 'inquire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle size={18} />
                  WhatsApp Our Sales Team
                </a>
                <a href="tel:+919999999999" className="btn-outline flex items-center justify-center gap-2 text-base">
                  <Phone size={18} />
                  Call: +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}