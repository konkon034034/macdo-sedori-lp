import React from 'react';
import { motion } from 'framer-motion';

export default function StepFlow() {
  const steps = [
    {
      num: '一',
      title: '公式LINEでリストGET',
      desc: 'まずは公式LINEに登録。「激アツ商品3選」を無料で受け取る。'
    },
    {
      num: '二',
      title: 'PCとスマホでリサーチ',
      desc: 'もらったリストを片手に、マクドナルドなどでPCを開き、効率的に利益商品をかっさらう。'
    },
    {
      num: '三',
      title: '「松尾塾」で無双する',
      desc: '実績が出たら、塾長のブログから「マクドせどりを見た」と伝えて松尾塾へ！私から秘密の残り27個をプレゼント。'
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-light relative">
      {/* 和紙テクスチャ */}
      <div className="absolute inset-0 bg-washi opacity-60"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl text-center text-brand-navy mb-16">
          驚くほど極めてシンプル。<br />
          <span className="fude-border text-brand-crimson">稼ぐための「三つ」の順序</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 relative">
          {/* 横線のコネクター */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-red to-brand-crimson -z-10"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-8 border-brand-navy relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* 重厚なステップナンバー */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-crimson text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg shadow-brand-red/30">
                <span className="font-serif font-black text-2xl">{step.num}</span>
              </div>
              
              <div className="text-center mt-6">
                <span className="block text-brand-gold font-bold mb-2">第 {idx + 1} 段階</span>
                <h3 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-200 pb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 font-sans leading-relaxed text-left md:text-center font-bold text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
