import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { MapPin } from 'lucide-react';

const GALLERY = [
  {
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    location: 'Thanjavur, Tamil Nadu',
    caption: 'RAN Agri Monoblock — Paddy Field Irrigation',
  },
  {
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    location: 'Coimbatore, Tamil Nadu',
    caption: 'RAN Submersible V6 — Borewell Installation',
  },
  {
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    location: 'Gujarat, Ahmedabad',
    caption: 'RAN Solar Pump 5HP — Off-Grid Farm',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    location: 'Bengaluru, Karnataka',
    caption: 'RAN Centrifugal Pro — Industrial Facility',
  },
  {
    image: 'https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/7a267b487_Gemini_Generated_Image_m86tkhm86tkhm86t1.png',
    location: 'Tamil Nadu',
    caption: 'RAN Pump — Canal Irrigation at Golden Hour',
  },
  {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    location: 'Punjab, Ludhiana',
    caption: 'RAN Openwell Pump — Large Farm Irrigation',
  },
];

export default function ProductsInAction() {
  return (
    <section id="in-action" className="relative py-20 px-4" style={{ background: '#E7E1B1' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="section-tag block mb-3">Products in Action</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
            Seen Across<br />
            <span style={{ color: '#306D29' }}>India's Fields.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#3a3020' }}>
            Real RAN Pump installations at farms, factories, and fields — working hard every single day.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              style={{ border: '1px solid rgba(48,109,41,0.2)' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-52 sm:h-56 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.9) 0%, rgba(10,8,4,0.3) 60%, transparent 100%)' }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: '#FBF5DD' }}>{item.caption}</p>
                <div className="flex items-center gap-1">
                  <MapPin size={12} style={{ color: '#E7E1B1' }} />
                  <span className="font-mono text-xs" style={{ color: '#E7E1B1' }}>{item.location}</span>
                </div>
              </div>
              {/* Always-visible bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 group-hover:opacity-0 transition-opacity" style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.7), transparent)' }}>
                <div className="flex items-center gap-1">
                  <MapPin size={11} style={{ color: '#E7E1B1' }} />
                  <span className="font-mono text-[11px]" style={{ color: '#E7E1B1', opacity: 0.8 }}>{item.location}</span>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg opacity-70" style={{ borderColor: '#306D29' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}