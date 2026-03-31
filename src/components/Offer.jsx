import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function Offer() {
  return (
    <section id="offer" className="py-24 px-4 bg-brand-lightNavy text-white relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-brand-red text-white font-bold px-6 py-2 rounded-full mb-8 text-sm md:text-base animate-pulse shadow-[0_0_15px_rgba(227,0,15,0.8)]">
            ＼ まずは、今すぐ稼げる商品を無料で体感！ ／
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            公式LINE登録で今すぐ！<br />
            <span className="text-brand-gold text-glow">「極アツ中古家電リスト3選」</span><br />
            無料プレゼント中！
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-sans font-bold leading-relaxed max-w-2xl mx-auto bg-brand-navy p-6 rounded-lg border border-brand-lightNavy shadow-inner">
            PCを開いて探すだけで、数千円〜数万円の利益が出る。<br />
            まずはこの確実な「3つの利益商品」を手に取り、自分の力でサクッと稼ぐ快感を味わってください！
          </p>

          <div className="text-base md:text-lg text-gray-400 mb-12 font-sans font-bold leading-relaxed max-w-2xl mx-auto">
            <h3 className="text-2xl text-brand-gold font-black mb-4 border-b border-gray-600 pb-2">さらに、本気で第2の人生を変えたい方へ。</h3>
            <p className="mb-4">
              この3つはほんの序の口です。実績を出して覚悟が決まったら、私が所属している最強の環境である<span className="text-white text-xl">「松尾塾」</span>の扉を叩いてください！
            </p>
            <p className="mb-4 bg-black/30 p-4 border-l-4 border-brand-red text-left">
              【入塾特典と重要なルール】<br />
              松尾塾にはアフィリエイトリンクはありません。<br />
              入塾をご希望の方は、<span className="text-brand-gold decoration-brand-gold underline underline-offset-4">松尾塾長のLINEなどから直接連絡をとり、面談してお話して入塾する形</span>となります。<br />
              <br />
              その際、必ず面談時に<strong className="text-brand-crimson text-xl bg-white px-2 py-1 ml-1 leading-loose">「マクドせどりを見た！」</strong>と塾長にお伝えください。<br />
              そう言って入塾していただいた方のみの限定特典として、私が市場で暴れ回っている<strong className="text-white">【門外不出の極秘リスト・残り27個】</strong>を全てプレゼントします！
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white text-glow">
              もう一度、大人としての誇りを取り戻す一歩を。
            </h3>
            <CTAButton 
              text="公式LINEに登録して「極アツ3選」を受け取る！" 
              href="https://lin.ee/6mBGXVn" 
              className="py-6 tracking-wide"
            />
            <p className="mt-6 text-sm text-gray-400 font-sans font-bold">
              ※ご登録後、スマホまたはPCですぐにリスト3選をご覧いただけます。<br />
              ※この3選に関して後から代金を請求するようなことは一切ありません。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
