import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Award, Leaf, Users, Zap, Globe } from 'lucide-react';

const VALUES = [
  { icon: <ShieldCheck size={22} />, title: 'Trusted Quality', desc: 'Every RAN pump is ISI certified and rigorously tested to meet Indian agricultural and industrial standards.' },
  { icon: <Award size={22} />, title: '25+ Years Experience', desc: 'Over two decades of engineering excellence, serving farmers and industries across India.' },
  { icon: <Leaf size={22} />, title: 'Eco-Friendly', desc: 'Our solar pump range and energy-efficient motors reduce power consumption and carbon footprint.' },
  { icon: <Users size={22} />, title: '10,000+ Customers', desc: 'Trusted by farmers, factories, housing societies, and municipalities across 50+ districts.' },
  { icon: <Zap size={22} />, title: 'High Performance', desc: 'Precision-engineered impellers and motors built to deliver maximum output in the toughest conditions.' },
  { icon: <Globe size={22} />, title: 'Pan-India Reach', desc: 'Wide dealer and service network ensures fast support wherever you are in India.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4" style={{ background: '#FBF5DD' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="right">
            <span className="section-tag block mb-3">About RAN Pump</span>
            <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
              Engineering Power.<br />
              <span style={{ color: '#306D29' }}>Serving India.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#3a3020' }}>
              RAN Pump is a proudly Indian pump manufacturer dedicated to powering the nation's agriculture and industry.
              Founded with a vision to deliver world-class pump technology at accessible prices, we have grown into one of
              Tamil Nadu's most trusted motor and pump brands.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#3a3020' }}>
              From small-scale farmers irrigating their first field to large industrial plants needing reliable water systems,
              RAN Pump has the right solution — designed in India, for India.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ISI Certified', 'BIS Approved', 'ISO 9001:2015', 'Made in India'].map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-sm"
                  style={{ background: 'rgba(48,109,41,0.09)', border: '1px solid rgba(48,109,41,0.3)', color: '#306D29' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative rounded-lg overflow-hidden" style={{ border: '1px solid rgba(48,109,41,0.2)' }}>
              <img
                src="https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/7a267b487_Gemini_Generated_Image_m86tkhm86tkhm86t1.png"
                alt="RAN Pump installed in rice field"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.7) 0%, transparent 60%)' }} />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-xs tracking-widest mb-1" style={{ color: '#E7E1B1' }}>FIELD PROVEN</p>
                <p className="text-sm font-semibold" style={{ color: '#FBF5DD' }}>Powering India's fields since 1999</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-5 rounded-lg group"
              style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.15)' }}
              whileHover={{ borderColor: 'rgba(48,109,41,0.5)', y: -2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-sm" style={{ background: 'rgba(48,109,41,0.1)', color: '#306D29' }}>
                  {v.icon}
                </div>
                <h3 className="font-bold group-hover:text-[#306D29] transition-colors" style={{ color: '#0A0804' }}>{v.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#3a3020' }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}