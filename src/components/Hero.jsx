import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative bg-brand-navy w-full py-20 px-4 overflow-hidden border-b-8 border-brand-crimson">
      {/* 富士山や波のような、日本的で重厚な背景画像 (モノクロ調でオーバーレイ) */}
      <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1490806840056-e7467ce864fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale"></div>
      
      {/* 墨汁の筆跡のような抽象的なSVGアクセント（左上と右下） */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-crimson/20 blur-3xl rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-sm text-brand-gold bg-brand-dark/50 border-l-4 border-brand-gold font-bold mb-6 text-sm md:text-base tracking-widest">
            PC1台。週3日からの逆転劇
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-black drop-shadow-2xl">
            今の延長線の人生で、<br className="hidden md:block" />
            <span className="text-brand-gold text-glow border-b-2 border-brand-crimson pb-2 inline-block mt-2">本当に後悔しませんか？</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-sans font-bold bg-brand-navy/60 inline-block px-4 py-2 rounded">
            何歳からでも、決して遅くない。<br />
            大人としての誇りと稼ぐ力を再び取り戻す、<br className="md:hidden" />
            「電脳中古家電せどり」の極意。
          </p>
          
          <div className="mt-8">
            <CTAButton text="まずは公式LINE登録で「激アツ商品3選」を受け取る" href="#offer" />
            <p className="text-gray-300 mt-4 text-sm font-sans tracking-wide">※一切料金はかかりません。すぐにリストをご覧いただけます。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
