import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function CTAButton({ text, href = "#", className = "" }) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center w-full md:w-auto px-8 py-5 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-brand-crimson to-brand-red rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Pulse effect for higher conversion
      animate={{
        boxShadow: ["0px 0px 0px rgba(153,0,0,0)", "0px 0px 20px rgba(227,0,15,0.6)", "0px 0px 0px rgba(153,0,0,0)"],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <span className="drop-shadow-md">{text}</span>
      <ChevronRight className="w-8 h-8 ml-2" />
    </motion.a>
  );
}
