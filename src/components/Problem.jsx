import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  const problems = [
    "増えない給料と、のしかかる物価高・税金",
    "「老後資金2000万円問題」への漠然とした恐怖",
    "定年後、会社という盾がなくなった時の無力感",
    "家族に心配させたくないという、一人で抱える重圧"
  ];

  return (
    <section className="py-20 px-4 bg-brand-light">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-brand-navy mb-12">
            こんな風に、<br className="md:hidden" />
            <span className="text-brand-crimson">息苦しさ</span>を感じていませんか？
          </h2>

          <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-t-8 border-brand-lightNavy">
            <ul className="space-y-6">
              {problems.map((prob, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-navy text-white font-bold mr-4 mt-1">
                    ✓
                  </span>
                  <span className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                    {prob}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 bg-gray-50 rounded border-l-4 border-brand-crimson">
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed">
                会社に人生を預けるのではなく、<span className="text-brand-crimson">「自分の腕で稼ぐ感覚」</span>を取り戻したい。<br />
                そう思っている中高年代の方々が今、急増しています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
