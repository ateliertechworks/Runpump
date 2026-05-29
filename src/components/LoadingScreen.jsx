import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0A0804' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Corner accents */}
          {[['top-6 left-6', 'border-t-2 border-l-2'], ['top-6 right-6', 'border-t-2 border-r-2'], ['bottom-6 left-6', 'border-b-2 border-l-2'], ['bottom-6 right-6', 'border-b-2 border-r-2']].map(([pos, border], i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 ${border} opacity-40`} style={{ borderColor: '#306D29' }} />
          ))}

          {/* Rings */}
          <div className="absolute">
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 100 + i * 60,
                  height: 100 + i * 60,
                  left: -(50 + i * 30),
                  top: -(50 + i * 30),
                  border: '1px solid #306D29',
                }}
                animate={{ opacity: [0.04, 0.12, 0.04], scale: [1, 1.04, 1] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>

          {/* Logo + bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <img
              src="https://media.base44.com/images/public/user_69e7851742160d5097ef0b9a/b4da21ebb_logo.png"
              alt="RAN Pump"
              className="w-44 h-auto"
            />

            <div className="w-60 flex flex-col items-center gap-3">
              <div className="w-full h-px relative overflow-hidden" style={{ background: '#1a1108' }}>
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  style={{ background: '#306D29', width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#306D29' }}
                />
                <span className="font-mono text-xs tracking-widest" style={{ color: '#E7E1B1', opacity: 0.6 }}>
                  LOADING... {progress}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}