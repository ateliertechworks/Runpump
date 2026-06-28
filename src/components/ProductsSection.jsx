import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Self Priming Monobloc Pumps', 'Borewell Submersible Pumps', 'Dewatering & Sewage Pumps', 'Openwell Submersible Pumps', 'Pressure Boosting Pumps'];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="relative py-16 md:py-24 px-4" style={{ background: '#FBF5DD' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <span className="section-tag block mb-3">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
            The Engine Grid
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#5a4e38' }}>
            Precision-engineered pump models for every application — from deep borewells to large-scale industrial systems.
          </p>
        </ScrollReveal>

        {/* Category filters */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat ? '#306D29' : 'transparent',
                color: activeCategory === cat ? '#FBF5DD' : '#306D29',
                border: `1px solid ${activeCategory === cat ? '#306D29' : 'rgba(48,109,41,0.35)'}`,
              }}
            >
              {cat}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Products grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={setSelectedProduct}
            />
          ))}
        </motion.div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}