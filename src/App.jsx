import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, AlertTriangle, Gift, Smartphone, Zap, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15分タイマー（疑似的な希少性）
  
  // LINE友だち追加URL（仮のプレースホルダーとして後で置き換える想定）
  // ユーザーがまだURLをくれていないので、一旦ハッシュにしておき、あとで教えられたら書き換える。
  const LINE_URL = "#"; 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red selection:text-white pb-20">
      
      {/* ⚠️ ヘッダー警告帯 */}
      <div className="bg-brand-red text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-2 animate-pulse">
        <AlertTriangle size={16} />
        同業者の登録はお断りしています。本気で稼ぎたい方限定です。
      </div>

      <div className="max-w-xl mx-auto px-4 pt-8">
        {/* メインヒーローセクション */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-block bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-sm font-black mb-2 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            【緊急・ゲリラ公開】
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            マクドナルドにいながら<br/>
            <span className="text-brand-yellow text-4xl md:text-5xl drop-shadow-[0_0_10px_rgba(255,199,44,0.3)]">
              月商400万円
            </span>
            を叩き出す<br/>
            <span className="text-white text-2xl md:text-3xl">「電脳中古家電せどり」の極意</span>
          </h1>

          <div className="bg-gradient-to-r from-red-600 to-red-900 border-2 border-brand-red p-4 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 blur-xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <p className="text-lg md:text-xl font-bold leading-relaxed whitespace-pre-wrap text-white">
              実践者トップの成績保持者である<br/>
              <span className="text-brand-yellow text-2xl">「マクドせどりマン」</span>が、<br/>
              昨日売れたばかりの利益商品を<br/>
              <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">特別公開します。</span>
            </p>
          </div>
        </motion.div>

        {/* 矢印ナビゲーション */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center my-8 text-brand-gold"
        >
          <ArrowDown size={40} />
        </motion.div>

        {/* オファーセクション（返報性＆希少性） */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 shadow-2xl relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-dark px-6 py-1 rounded-full font-black text-sm whitespace-nowrap shadow-lg">
            LINE友だち追加特典
          </div>
          
          <div className="text-center mt-4 space-y-4">
            <Gift className="mx-auto text-brand-red mb-2" size={48} />
            <h2 className="text-2xl font-black text-brand-yellow">
              今日からすぐ使える！<br/>
              【ほっかほか激アツ商品リスト３選】
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left mt-4 border-l-4 border-brand-red pl-4">
              本来なら数万円で売られるレベルの、ガチで今すぐ仕入れ可能な利益リストの『一部』です。<br/>
              今回だけ、LINE登録者限定で<strong className="text-white">【完全無料】</strong>で今すぐお渡しします。
            </p>
          </div>

          {/* カウントダウンタイマー */}
          <div className="mt-8 bg-black rounded-xl p-4 text-center border border-gray-800">
            <p className="text-brand-red text-sm font-bold mb-2">⚠️ この公開は予告なく停止する可能性があります</p>
            <div className="text-3xl font-mono font-bold text-white tabular-nums tracking-widest">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* CTAボタン */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-gray-400">👇 下のボタンから1秒で受け取る 👇</p>
            <a 
              href={LINE_URL}
              className="block w-full bg-[#06C755] hover:bg-[#05b04c] text-white font-black text-xl py-5 px-6 rounded-2xl shadow-[0_8px_0_#048f3e,0_15px_20px_rgba(6,199,85,0.4)] active:shadow-[0_0px_0_#048f3e] active:translate-y-2 transition-all animate-flash relative overflow-hidden group"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              <span className="flex items-center justify-center gap-2">
                <Smartphone size={24} />
                今すぐ無料でリストを受け取る
              </span>
            </a>
            <p className="text-xs text-gray-500 mt-4">※ワンクリックでLINEアプリが起動します。<br/>個人情報が抜かれることはありません。</p>
          </div>
        </div>

        {/* なぜ無料なのか？（権威性と一貫性への布石） */}
        <div className="mt-16 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2 relative">
            <div className="w-1 h-6 bg-brand-yellow absolute -left-4"></div>
            なぜ３つだけ無料で公開するのか？
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            俺は松尾さんの塾のノウハウだけで月商400万円を達成しました。<br/><br/>
            「本当に稼げるの？」と疑っているあなたに、まずはこの**３つのリストで実際に利益が出ることを体感**してほしいからです。<br/><br/>
            もし本気で稼ぐ覚悟が決まったら、その時は...<strong className="text-brand-yellow">残りのリスト（27個）の受け取り方</strong>をお伝えします。<br/><br/>
            まずは無料で、俺の実力を見てみてください。
          </p>
        </div>

        {/* ３つのベネフィット */}
        <div className="mt-12 space-y-4">
          {[
            "今日仕入れて明日売れる即金性",
            "スキマ時間・カフェで出来る電脳リサーチ",
            "ライバル不在の実践者しか知らない穴場情報"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-900 border border-gray-800 p-4 rounded-xl">
              <CheckCircle2 className="text-brand-gold shrink-0" size={24} />
              <span className="font-bold text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* 追伸（最後のひと押し） */}
        <div className="mt-16 bg-gray-900 p-6 rounded-2xl text-center border-t-4 border-brand-red">
          <p className="font-bold mb-4">追伸：</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            ライバルが増加した時点でこのページは非公開にします。<br/>
            利益商品リストが手に入る今のうちに、下のボタンから受け取っておいてください。
          </p>
          <div className="mt-6">
            <a 
              href={LINE_URL}
              className="block flex items-center justify-center gap-2 w-full bg-[#06C755] text-white font-bold py-4 rounded-xl shadow-lg border-b-4 border-[#048f3e] active:translate-y-1 active:border-b-0 transition-all"
            >
              <Zap size={20} /> LINEで今すぐリストを入手する
            </a>
          </div>
        </div>
        
        {/* フッター */}
        <footer className="mt-16 text-center text-xs text-gray-600 pb-8">
          <p>特定商取引法に基づく表記 | プライバシーポリシー</p>
          <p className="mt-2">Copyright © マクドせどりマン All Rights Reserved.</p>
        </footer>

      </div>

    </div>
  );
}
