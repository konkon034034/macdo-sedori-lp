import React from 'react';
import { motion } from 'framer-motion';

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-center text-white mb-12">
            「今更、若者と同じ土俵で戦いますか？」<br className="md:hidden" />
            <span className="text-brand-gold border-b-2 border-brand-crimson pb-2 mt-4 inline-block">大人の「戦い方」の違い</span>
          </h2>
          
          <div className="overflow-x-auto shadow-2xl rounded-xl border-4 border-brand-lightNavy bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 md:p-6 w-1/4 bg-gray-100 text-brand-dark font-bold border-b border-gray-200">比較ポイント</th>
                  <th className="p-4 md:p-6 w-[37.5%] bg-brand-lightNavy text-gray-300 font-bold border-b border-gray-600 text-center">
                    <span className="block text-sm opacity-80 mb-1">流行りの副業</span>
                    動画編集・プログラミング
                  </th>
                  <th className="p-4 md:p-6 w-[37.5%] bg-gradient-to-br from-brand-crimson to-brand-red text-white font-bold border-b border-brand-red text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-washi opacity-10"></div>
                    <span className="relative z-10 block text-sm text-brand-gold mb-1">大人の逆転ビジネス</span>
                    <span className="relative z-10 text-xl md:text-2xl drop-shadow-md">電脳中古家電せどり</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 md:p-6 font-bold text-gray-700 bg-gray-50">ライバル・競争率</td>
                  <td className="p-4 text-center">
                    <span className="text-4xl">❌</span>
                    <p className="mt-2 text-sm text-gray-600 font-bold">超絶レッドオーシャン。<br/>デジタル特化の若者が多く価格破壊が深刻。</p>
                  </td>
                  <td className="p-4 text-center bg-brand-red/5">
                    <span className="text-4xl text-brand-crimson font-serif font-black">◎</span>
                    <p className="mt-2 text-sm text-brand-navy font-bold">ガラ空きのブルーオーシャン。<br/>知識の参入壁があり、ライバルが増えない。</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 md:p-6 font-bold text-gray-700 bg-gray-50">体力・時間</td>
                  <td className="p-4 text-center">
                    <span className="text-4xl text-brand-dark">△</span>
                    <p className="mt-2 text-sm text-gray-600 font-bold">納期に追われ徹夜の連続。<br/>クライアントの修正指示に疲弊。</p>
                  </td>
                  <td className="p-4 text-center bg-brand-red/5">
                    <span className="text-4xl text-brand-crimson font-serif font-black">◎</span>
                    <p className="mt-2 text-sm text-brand-navy font-bold">完全自分のペース。<br/>空き時間にマクドでコーヒー片手に完結。</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 md:p-6 font-bold text-gray-700 bg-gray-50">過去の経験</td>
                  <td className="p-4 text-center">
                    <span className="text-4xl">❌</span>
                    <p className="mt-2 text-sm text-gray-600 font-bold">全く活きない。<br/>ゼロから最新ツールを覚える苦労。</p>
                  </td>
                  <td className="p-4 text-center bg-brand-red/5">
                    <span className="text-4xl text-brand-crimson font-serif font-black">◎</span>
                    <p className="mt-2 text-sm text-brand-navy font-bold">昭和の家電知識がそのまま直結。<br/>「これ昔使ってたな」が金のなる木に。</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
