import React from 'react';
import { motion } from 'framer-motion';

export default function Solution() {
  const ranking = [
    {
      rank: '1',
      title: "昭和の『経験』がそのまま武器になる",
      desc: "昔触った「オーディオアンプ」や「VHSビデオデッキ」。我々世代の『当たり前の知識』が、デジタルネイティブの若者にはない強力なアドバンテージになり、知識の壁がライバルを寄せ付けません。"
    },
    {
      rank: '2',
      title: "自宅やマクドナルドで完結する『電脳戦』",
      desc: "店舗を歩き回る泥臭い肉体労働は一切不要。休日の昼下がり、マクドナルドでコーヒーを飲みながら、PCとスマホだけで全国から商品をリサーチし買い集めることが可能です。"
    },
    {
      rank: '3',
      title: "利益相反が起きない超『ブルーオーシャン』",
      desc: "市場には常に中古品が溢れています。一度知識のコツを掴めば、そこは誰にも邪魔されないあなただけの漁場。老後資金の不安を消し飛ばす、安定した強力な第2の収入源へと育ちます。"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* 背面に薄く巨大な「極」の文字などを入れる和風アクセント */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-gray-50 opacity-[0.03] select-none font-serif z-0">
        極
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl text-center text-brand-navy mb-16">
          若者には絶対に真似できない、<br className="md:hidden" />
          <span className="text-brand-crimson font-black fude-border relative inline-block mt-2">
            大人の「電脳せどり」最強ランキング
          </span>
        </h2>

        <div className="space-y-12">
          {ranking.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-6 md:p-8 bg-white border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] rounded-xl hover:shadow-[0_4px_30px_-5px_rgba(227,0,15,0.15)] transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                {/* ランキングの数字（毛筆風デカ文字） */}
                <div className="flex-shrink-0 relative">
                  <span className="text-6xl md:text-8xl font-serif font-black text-brand-gold opacity-90 drop-shadow-sm">
                    {item.rank}
                  </span>
                  <span className="absolute bottom-2 -right-4 text-brand-crimson font-black text-xl md:text-2xl transform rotate-[-10deg]">位</span>
                </div>
                
                <div className="text-center md:text-left mt-4 md:mt-0 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-sans leading-relaxed text-lg font-bold">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
