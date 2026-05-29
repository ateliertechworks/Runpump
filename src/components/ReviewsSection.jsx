import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, CheckCircle, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function StarRating({ rating, interactive = false, onRate }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onRate(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`${interactive ? 'cursor-pointer' : 'cursor-default'} transition-all`}
          aria-label={`${star} star`}
        >
          <Star
            size={interactive ? 22 : 15}
            style={{
              fill: star <= (hovered || rating) ? '#306D29' : 'transparent',
              color: star <= (hovered || rating) ? '#306D29' : '#c8bfa8',
            }}
          />
        </button>
      ))}
    </div>
  );
}

const SAMPLE_REVIEWS = [
  { id: 'demo1', name: 'Ravi Kumar', rating: 5, review_text: 'Best pump I have ever used. The RAN Agri Monoblock has been running non-stop for 3 seasons. Excellent quality and fuel efficiency.', product: 'RAN Agri Monoblock', location: 'Tamil Nadu', verified: true },
  { id: 'demo2', name: 'Suresh Patel', rating: 5, review_text: 'Solar pump is a game changer! No electricity cost. My fields are fully irrigated and I saved ₹3,500 monthly on electricity bills.', product: 'RAN Solar Pump 2HP', location: 'Gujarat', verified: true },
  { id: 'demo3', name: 'Murugesan S', rating: 4, review_text: 'The V6 borewell pump reaches my 280ft deep well perfectly. Service team was very professional and installation was done in 4 hours.', product: 'RAN Submersible V6', location: 'Karnataka', verified: true },
  { id: 'demo4', name: 'Anbu Selvan', rating: 5, review_text: 'RAN Pump customer service is outstanding. Had a small issue and they replaced the part within 24 hours under warranty. Truly reliable brand.', product: 'RAN Openwell Pump', location: 'Madurai', verified: true },
  { id: 'demo5', name: 'Krishnan N', rating: 5, review_text: 'Three years, zero maintenance needed on the RAN Centrifugal Pro. Running our rice mill water supply without a single breakdown.', product: 'RAN Centrifugal Pro', location: 'Thanjavur', verified: false },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', rating: 0, review_text: '', product: '', location: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(0);
  const PER_PAGE = 3;

  // Load reviews from localStorage on mount
  useEffect(() => {
    const storedReviews = localStorage.getItem('customer_reviews');
    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews);
        setReviews([...parsedReviews, ...SAMPLE_REVIEWS]);
      } catch (error) {
        console.error('Error loading reviews:', error);
        setReviews(SAMPLE_REVIEWS);
      }
    } else {
      setReviews(SAMPLE_REVIEWS);
    }
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    const userReviews = reviews.filter(r => !r.id.toString().startsWith('demo'));
    if (userReviews.length > 0) {
      localStorage.setItem('customer_reviews', JSON.stringify(userReviews));
    }
  }, [reviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0 || !formData.name || !formData.review_text) return;
    
    setSubmitting(true);
    
    // Create new review with timestamp
    const newReview = {
      ...formData,
      id: Date.now().toString(),
      verified: false,
      createdAt: new Date().toISOString()
    };
    
    // Add to the beginning of the reviews list
    setReviews(prev => [newReview, ...prev]);
    
    // Reset form and show success message
    setFormData({ name: '', rating: 0, review_text: '', product: '', location: '' });
    setSubmitted(true);
    setPage(0); // Reset to first page to show new review
    setSubmitting(false);
    
    // Hide success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  const avgRating = reviews.length > 0 ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : 0;
  const totalPages = Math.ceil(reviews.length / PER_PAGE);
  const displayedReviews = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="reviews" className="relative py-20 px-4" style={{ background: '#FBF5DD' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="section-tag block mb-3">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
            Field Reports<br />
            <span style={{ color: '#306D29' }}>From Real Farmers.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="font-mono text-4xl font-bold" style={{ color: '#306D29' }}>{avgRating}</span>
            <div>
              <StarRating rating={Math.round(parseFloat(avgRating))} />
              <p className="text-sm mt-1" style={{ color: '#5a4e38' }}>{reviews.length} verified reviews</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Reviews */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-6">
              <AnimatePresence mode="wait">
                {displayedReviews.map((review, i) => (
                  <motion.div
                    key={review.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="p-5 rounded-lg"
                    style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.15)' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: '#306D29', color: '#FBF5DD' }}>
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm" style={{ color: '#0A0804' }}>{review.name}</span>
                            {review.verified && (
                              <CheckCircle size={12} style={{ color: '#306D29' }} aria-label="Verified purchase" />
                            )}
                          </div>
                          {review.location && (
                            <div className="flex items-center gap-1 text-xs" style={{ color: '#5a4e38' }}>
                              <MapPin size={10} />
                              {review.location}
                            </div>
                          )}
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: '#3a3020' }}>"{review.review_text}"</p>
                    {review.product && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{ background: 'rgba(48,109,41,0.1)', color: '#306D29', border: '1px solid rgba(48,109,41,0.2)' }}>
                        {review.product}
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 rounded-sm transition-all disabled:opacity-30"
                  style={{ border: '1px solid rgba(48,109,41,0.3)', color: '#306D29' }}
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-mono text-sm" style={{ color: '#5a4e38' }}>{page + 1} / {totalPages}</span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="p-2 rounded-sm transition-all disabled:opacity-30"
                  style={{ border: '1px solid rgba(48,109,41,0.3)', color: '#306D29' }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Review Form */}
          <div>
            <ScrollReveal direction="left">
              <div className="p-6 rounded-lg sticky top-24" style={{ background: '#E7E1B1', border: '1px solid rgba(48,109,41,0.2)' }}>
                <h3 className="text-xl font-black mb-1" style={{ fontFamily: 'Inter Tight', color: '#0A0804' }}>
                  Share Your Experience
                </h3>
                <p className="text-sm mb-5" style={{ color: '#5a4e38' }}>Help other farmers make better choices.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <CheckCircle size={48} className="mx-auto mb-3" style={{ color: '#306D29' }} />
                    <p className="font-bold" style={{ color: '#0A0804' }}>Thank you for your review!</p>
                    <p className="text-sm mt-1" style={{ color: '#5a4e38' }}>Your feedback helps the farming community.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: 'Your Name', key: 'name', placeholder: 'e.g. Ravi Kumar', required: true },
                      { label: 'Product (Optional)', key: 'product', placeholder: 'e.g. RAN Agri Monoblock' },
                      { label: 'Location (Optional)', key: 'location', placeholder: 'e.g. Tamil Nadu' },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="font-mono text-xs tracking-widest uppercase block mb-1.5" style={{ color: '#306D29' }}>{f.label}</label>
                        <input
                          type="text"
                          value={formData[f.key]}
                          onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                          placeholder={f.placeholder}
                          required={f.required}
                          className="w-full px-4 py-2.5 rounded-sm text-sm focus:outline-none"
                          style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.2)', color: '#0A0804' }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="font-mono text-xs tracking-widest uppercase block mb-2" style={{ color: '#306D29' }}>Your Rating</label>
                      <StarRating rating={formData.rating} interactive onRate={r => setFormData(p => ({ ...p, rating: r }))} />
                    </div>
                    <div>
                      <label className="font-mono text-xs tracking-widest uppercase block mb-1.5" style={{ color: '#306D29' }}>Your Review</label>
                      <textarea
                        value={formData.review_text}
                        onChange={e => setFormData(p => ({ ...p, review_text: e.target.value }))}
                        placeholder="Tell us about your experience..."
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-sm text-sm resize-none focus:outline-none"
                        style={{ background: '#FBF5DD', border: '1px solid rgba(48,109,41,0.2)', color: '#0A0804' }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting || formData.rating === 0}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-sm font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: '#306D29', color: '#FBF5DD' }}
                    >
                      {submitting ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                          <Send size={16} />
                        </motion.div>
                      ) : <Send size={16} />}
                      {submitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}