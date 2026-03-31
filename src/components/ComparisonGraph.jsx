import React from 'react';
import { motion } from 'framer-motion';

export default function ComparisonGraph() {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-brand-navy mb-4">
          「給料一本」の危険性。<br className="md:hidden" />
          <span className="fude-border text-brand-crimson pb-2">この差があなたの老後を決める</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          上がらない給料に対し、物価と税金だけが上がり続ける現代。<br />
          電脳せどりを掛け合わせた場合、その差はたった数年で残酷なまでに開きます。
        </p>
        
        <div className="relative bg-brand-light p-6 md:p-12 rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-gray-200">
          {/* SVG Graph Grid */}
          <div className="relative h-64 md:h-80 w-full mb-6">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-[1px] bg-gray-300 flex items-center">
                  {i === 0 && <span className="absolute -left-2 md:-left-12 text-xs text-gray-500 font-bold w-10 text-right">MAX</span>}
                  {i === 4 && <span className="absolute -left-2 md:-left-12 text-xs text-gray-500 font-bold w-10 text-right">0</span>}
                </div>
              ))}
            </div>

            {/* Lines using SVG mapping points */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* サラリーマン収入カーブ (現状維持〜微減) */}
              <motion.polyline
                points="0,80 20,80 40,82 60,82 80,85 100,88"
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* マクドせどり掛け合わせカーブ（圧倒的な右肩上がり） */}
              <motion.polyline
                points="0,80 15,75 30,60 45,45 60,30 80,15 100,0"
                fill="none"
                stroke="#E3000F"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
              
              {/* 乖離（ギャップ）を示すための網掛けや破線 */}
              <motion.line
                x1="80" y1="85" x2="80" y2="15"
                stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.2 }}
                viewport={{ once: true }}
              />
            </svg>

            {/* Labels in SVG coordinate space roughly mapped to absolute positioning */}
            <motion.div 
              className="absolute top-[80%] right-[0%] bg-gray-500 text-white text-xs px-2 py-1 rounded"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} viewport={{ once:true }}
            >
              会社の給料のみ
            </motion.div>
            
            <motion.div 
              className="absolute flex items-center top-[0%] right-[0%] bg-brand-crimson text-white text-sm md:text-base font-bold px-3 py-1 rounded shadow-lg transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }} viewport={{ once:true }}
            >
              給与＋せどり利益
            </motion.div>
          </div>
          
          <div className="flex justify-between text-gray-500 text-sm font-bold border-t-2 border-brand-dark pt-2">
            <span>開始時</span>
            <span>1年後</span>
            <span>3年後</span>
            <span>5年後</span>
          </div>
        </div>
      </div>
    </section>
  );
}
