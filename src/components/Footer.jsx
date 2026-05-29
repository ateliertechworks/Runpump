import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 px-4" style={{ background: '#0A0804', borderTop: '2px solid #306D29' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/b4da21ebb_logo.png"
              alt="RAN Pump"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#E7E1B1', opacity: 0.7 }}>
              India's trusted manufacturer of high-performance agricultural and industrial pumps. Powering the fields that feed a nation — since 1999.
            </p>
            <a
              href={buildWhatsAppUrl('General', 'inquire')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-sm transition-all"
              style={{ background: '#306D29', color: '#FBF5DD' }}
              onMouseEnter={e => e.currentTarget.style.background = '#3d8a34'}
              onMouseLeave={e => e.currentTarget.style.background = '#306D29'}
            >
              <MessageCircle size={15} />
              WhatsApp Us Now
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#306D29' }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'All Products', href: '#products' },
                { label: 'In Action', href: '#in-action' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'Support Center', href: '#support' },
                { label: 'About Us', href: '#about' },
              ].map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm flex items-center gap-2 transition-colors"
                    style={{ color: '#E7E1B1', opacity: 0.65 }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = '#E7E1B1'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0.65; }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: '#306D29' }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#306D29' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: '#E7E1B1', opacity: 0.7 }}>
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: '#306D29' }} />
                <a href="tel:+918610619891" className="hover:opacity-100 transition-opacity">+91 86106 19891</a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: '#E7E1B1', opacity: 0.7 }}>
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: '#306D29' }} />
                <a href="mailto:ranpumpsindustries@gmail.com" className="hover:opacity-100 transition-opacity">ranpumpsindustries@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: '#E7E1B1', opacity: 0.7 }}>
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#306D29' }} />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Facebook size={16} />, href: 'https://www.facebook.com/ranpumps', label: 'Facebook' },
                { icon: <Instagram size={16} />, href: 'https://www.instagram.com/ranpumps', label: 'Instagram' },
                { icon: <Youtube size={16} />, href: 'https://www.youtube.com/@ranpumps', label: 'YouTube' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-sm transition-all"
                  style={{ border: '1px solid rgba(48,109,41,0.3)', color: '#E7E1B1', opacity: 0.65 }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.borderColor = '#306D29'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = 0.65; e.currentTarget.style.borderColor = 'rgba(48,109,41,0.3)'; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3" style={{ borderTop: '1px solid rgba(48,109,41,0.2)' }}>
          <p className="font-mono text-xs" style={{ color: '#E7E1B1', opacity: 0.4 }}>© {year} RAN Pump. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#306D29' }} />
            <span className="font-mono text-xs" style={{ color: '#E7E1B1', opacity: 0.4 }}>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}