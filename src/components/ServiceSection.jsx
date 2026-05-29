import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { buildSupportWhatsAppUrl } from '@/data/products';
import { Wrench, Settings, Package, ShieldCheck, Clock, AlertTriangle, MessageCircle } from 'lucide-react';

const SERVICES = [
  {
    icon: <Settings size={28} />,
    title: 'Installation',
    desc: 'Professional on-site installation by certified technicians. Full testing and commissioning included.',
    time: '24-48 Hours',
    tag: 'New Pump'
  },
  {
    icon: <Wrench size={28} />,
    title: 'Maintenance',
    desc: 'Annual Maintenance Contracts (AMC) for uninterrupted pump performance throughout the season.',
    time: 'Scheduled',
    tag: 'AMC Available'
  },
  {
    icon: <Package size={28} />,
    title: 'Spare Parts',
    desc: 'Genuine RAN spare parts available including impellers, bearings, seals, and motor windings.',
    time: 'In Stock',
    tag: 'Genuine Parts'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Warranty Repair',
    desc: 'Free repair or replacement for all defects covered under warranty. No hidden charges.',
    time: '2 Year Cover',
    tag: 'No Cost'
  },
  {
    icon: <Clock size={28} />,
    title: 'Emergency Service',
    desc: 'Emergency breakdown support with 4-hour response time during crop irrigation season.',
    time: '4 Hr Response',
    tag: 'Priority'
  },
  {
    icon: <AlertTriangle size={28} />,
    title: 'Rewinding Service',
    desc: 'Motor rewinding by expert electricians using ISI-certified copper wire. 1 year warranty on rewinds.',
    time: '48-72 Hours',
    tag: 'Expert Care'
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="relative py-24 px-4" style={{ background: '#1E293B' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="section-tag block mb-3">After-Sales Support</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] mb-4" style={{ fontFamily: 'Inter Tight' }}>
            We Service What<br />
            <span className="text-[#2DD4BF]">We Sell.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Our after-sales network ensures your pump runs at peak performance — season after season.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl card-ghost-border group"
              style={{ background: '#0F172A' }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="p-3 rounded-xl text-[#2DD4BF]"
                  style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.12)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[10px] text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded tracking-widest">
                    {service.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[#94A3B8]">{service.time}</span>
                </div>
              </div>
              <h3 className="text-xl font-black text-[#F8FAFC] mb-2 group-hover:text-[#2DD4BF] transition-colors" style={{ fontFamily: 'Inter Tight' }}>
                {service.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">{service.desc}</p>
              <a
                href={buildSupportWhatsAppUrl('Service Request', service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-[#2DD4BF] hover:underline"
              >
                <MessageCircle size={14} />
                Request {service.title}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Service promise */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { value: '4 Hours', label: 'Emergency Response Time' },
              { value: '100%', label: 'Genuine Parts Guaranteed' },
              { value: 'ISI', label: 'Certified Technicians' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl"
                style={{ background: 'rgba(45,212,191,0.04)', border: '1px solid rgba(45,212,191,0.1)' }}
              >
                <div className="font-mono text-2xl font-bold text-[#2DD4BF] mb-1">{item.value}</div>
                <div className="text-sm text-[#94A3B8]">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}